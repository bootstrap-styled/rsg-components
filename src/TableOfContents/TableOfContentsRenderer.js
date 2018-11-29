import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import omit from 'lodash.omit';
import mapToCssModules from 'map-to-css-modules/lib';
import Nav from '@bootstrap-styled/v4/lib/Nav';
import Form from '@bootstrap-styled/v4/lib/Form';
import Input from '@bootstrap-styled/v4/lib/Input';


export const defaultProps = {
  theme: {
    styleguide: {
      '$rsg-toc-display': 'block',
      '$rsg-toc-padding': '0',
      '$rsg-toc-background': '#fff',
      '$rsg-toc-text-align': 'left',
      '$rsg-toc-form-background': '#B31255',
      '$rsg-toc-form-padding': '20px 14px',
      '$rsg-toc-form-width': '100%',
      '$rsg-toc-form-margin': '0 auto',
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Specified node element will be passed as children of `<TableOfContentsRenderer />` component. */
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  /** Display search term used in search `<Input />` component. */
  searchTerm: PropTypes.string.isRequired,
  /** Set function passed to onchange input event. */
  onSearchTermChange: PropTypes.func.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-toc-display': PropTypes.string,
      '$rsg-toc-padding': PropTypes.string,
      '$rsg-toc-background': PropTypes.string,
      '$rsg-toc-text-align': PropTypes.string,
      '$rsg-toc-form-background': PropTypes.string,
      '$rsg-toc-form-padding': PropTypes.string,
      '$rsg-toc-form-width': PropTypes.string,
      '$rsg-toc-form-margin': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const TableOfContentsRendererUnstyled = (props) => {
  const {
    className,
    children,
    searchTerm,
    onSearchTermChange,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);
  return (
    <div
      className={mapToCssModules(cn(className, 'rsg-toc'), cssModule)}
      {...attributes}
    >
      <Form className="rsg-toc-form">
        <Input
          className="rsg-toc-form-input no-print"
          size="sm"
          value={searchTerm}
          placeholder="Filter by name"
          aria-label="Filter by name"
          onChange={(event) => onSearchTermChange(event.target.value)}
        />
      </Form>
      <Nav className="rsg-toc-nav">
        {children}
      </Nav>
    </div>
  );
};

TableOfContentsRendererUnstyled.defaultProps = defaultProps;
TableOfContentsRendererUnstyled.propTypes = propTypes;

const TableOfContentsRenderer = styled(TableOfContentsRendererUnstyled)`
  ${(props) => `
    &.rsg-toc {
      .rsg-toc-form {
        background: ${props.theme.styleguide['$rsg-toc-form-background']};
        padding: ${props.theme.styleguide['$rsg-toc-form-padding']};
        .rsg-toc-form-input {
          width: ${props.theme.styleguide['$rsg-toc-form-width']};
          margin: ${props.theme.styleguide['$rsg-toc-form-margin']};
        }
      }
      .rsg-toc-nav {
        background: ${props.theme.styleguide['$rsg-toc-background']};
        text-align: ${props.theme.styleguide['$rsg-toc-text-align']};
        display: ${props.theme.styleguide['$rsg-toc-display']};
        padding: ${props.theme.styleguide['$rsg-toc-padding']};
      }
    }
  `}
`;

TableOfContentsRenderer.defaultProps = defaultProps;
TableOfContentsRenderer.propTypes = propTypes;

export default TableOfContentsRenderer;
