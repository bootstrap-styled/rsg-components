import React from 'react';
import PropTypes from 'prop-types';
import { DOCS_COMPONENTS } from 'react-styleguidist/scripts/consts';
import omit from 'lodash.omit';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import Markdown from '../Markdown';

export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-welcome-max-width': '1000',
      '$rsg-welcome-margin': '0 auto',
      '$rsg-welcome-padding': '32px',
    },
  },
};

/* eslint-disable react/require-default-props */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-welcome-max-width': PropTypes.string,
      '$rsg-welcome-margin': PropTypes.string,
      '$rsg-welcome-padding': PropTypes.string,
    }),
  }),
  /** Set patterns used in welcome example. */
  patterns: PropTypes.array.isRequired,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};
/* eslint-enable react/require-default-props */


const WelcomeRendererUnstyled = (props, { config }) => {
  const {
    className,
    patterns,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-welcome'), cssModule)}
      {...attributes}
    >
      <Markdown
        text={`
# Welcome to ${config.title}!

**We couldn’t find any components** using these patterns:

${patterns.map((p) => `- \`${p}\``).join('\n')}

Create **styleguide.config.js** file in your project root directory like this:

    module.exports = {
      components: 'src/components/**/*.js'
    };

Read more in the [locating components guide](${DOCS_COMPONENTS}).
        `}
      />
    </div>
  );
};

WelcomeRendererUnstyled.defaultProps = defaultProps;
WelcomeRendererUnstyled.propTypes = propTypes;
WelcomeRendererUnstyled.contextTypes = {
  config: PropTypes.object,
};

const WelcomeRenderer = styled(WelcomeRendererUnstyled)` 
  ${(props) => `
    &.rsg-welcome {
      max-width: ${props.theme.styleguide['$rsg-welcome-max-width']};
      margin: ${props.theme.styleguide['$rsg-welcome-margin']};
      padding: ${props.theme.styleguide['$rsg-welcome-padding']};
    }
 `}
`;

WelcomeRenderer.defaultProps = defaultProps;
WelcomeRenderer.propTypes = propTypes;
WelcomeRendererUnstyled.contextTypes = {
  config: PropTypes.object,
};
export default WelcomeRenderer;
