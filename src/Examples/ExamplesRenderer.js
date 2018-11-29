import React from 'react';
import PropTypes from 'prop-types';
import Article from '@bootstrap-styled/v4/lib/Article';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-section-examples-padding': '0 10px 0 10px',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<SectionHeadingRenderer />` component. */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-section-examples-padding': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};


const ExamplesRendererUnstyled = (props) => {
  const {
    className,
    cssModule,
    children,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Article
      className={mapToCssModules(cn(className, 'rsg-examples'), cssModule)}
      {...attributes}
    >
      {children}
    </Article>
  );
};

ExamplesRendererUnstyled.defaultProps = defaultProps;
ExamplesRendererUnstyled.propTypes = propTypes;


const ExamplesRenderer = styled(ExamplesRendererUnstyled)` 
  ${(props) => `
    &.rsg-examples {
      padding: ${props.theme.styleguide['$rsg-section-examples-padding']};
    }
 `}
`;

ExamplesRenderer.defaultProps = defaultProps;
ExamplesRenderer.propTypes = propTypes;

export default ExamplesRenderer;
