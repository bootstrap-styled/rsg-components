import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@bootstrap-styled/v4/lib/Button';
import P from '@bootstrap-styled/v4/lib/P';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import filterSectionsByName from 'react-styleguidist/lib/client/utils/filterSectionsByName';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import cn from 'classnames';
import omit from 'lodash.omit';
import TableOfContentsRenderer from './TableOfContentsRenderer';
import ComponentsList from '../ComponentsList';

/* eslint-disable react/prop-types */
export const defaultProps = { // eslint-disable-next-line react/default-props-match-prop-types
  theme: {
    styleguide: {
      '$rsg-toc-collapse-button-delay': '500',
      '$rsg-toc-collapse-button-cursor': 'pointer',
      '$rsg-toc-collapse-button-color': '#767676',
      '$rsg-toc-collapse-button-background': '#f4e2e1',
      '$rsg-toc-collapse-button-width': '100%',
      '$rsg-toc-collapse-button-height': '45px',
      '$rsg-toc-collapse-button-border-radius': '0',
      '$rsg-toc-collapse-button-active-box-shadow': 'none',
      '$rsg-toc-collapse-button-content-text-align': 'right',
      '$rsg-toc-collapse-button-content-icon-padding': '0 0 0 10px',
      '$rsg-toc-collapse-button-content-icon-transition': 'transform 1s',
      '$rsg-toc-collapse-button-content-icon-transform': 'translateY(2px) rotateX(180deg)',
    },
  },
  useRouterLinks: false,
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  sections: PropTypes.array.isRequired,
  useRouterLinks: PropTypes.bool,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-toc-collapse-button-delay': PropTypes.string,
      '$rsg-toc-collapse-button-cursor': PropTypes.string,
      '$rsg-toc-collapse-button-color': PropTypes.string,
      '$rsg-toc-collapse-button-background': PropTypes.string,
      '$rsg-toc-collapse-button-width': PropTypes.string,
      '$rsg-toc-collapse-button-height': PropTypes.string,
      '$rsg-toc-collapse-button-border-radius': PropTypes.string,
      '$rsg-toc-collapse-button-active-box-shadow': PropTypes.string,
      '$rsg-toc-collapse-button-content-text-align': PropTypes.string,
      '$rsg-toc-collapse-button-content-icon-padding': PropTypes.string,
      '$rsg-toc-collapse-button-content-icon-transition': PropTypes.string,
      '$rsg-toc-collapse-button-content-icon-transform': PropTypes.string,
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

let isCollapseTransitioning = false;

class TableOfContentsUnstyled extends Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    searchTerm: '',
    hasCollapse: false,
    isOpenCollapse: false,
  };

  componentWillMount() {
    this.props.sections.map((section) => {
      const children = [...(section.sections || []), ...(section.components || [])];
      this.setState({
        hasCollapse: children.length > 0,
      });
      return null;
    });
  }

  shouldComponentUpdate(nextState) {
    return (this.state.isOpenCollapse !== nextState.isOpenCollapse || this.state.searchTerm !== nextState.searchTerm);
  }

  onChangeCollapse() {
    if (!isCollapseTransitioning) {
      isCollapseTransitioning = true;
      this.setState({
        isOpenCollapse: !this.state.isOpenCollapse,
      });
      setTimeout(() => {
        isCollapseTransitioning = false;
      }, this.props.theme.styleguide['$rsg-toc-collapse-button-delay']);
    }
  }

  renderLevel(sections, useRouterLinks = false, hashPath = [], useHashId = false) {
    const { isOpenCollapse } = this.state;

    const items = sections.map((section) => {
      const children = [...(section.sections || []), ...(section.components || [])];
      const sectionDepth = section.sectionDepth || 0;
      const childHashPath =
        sectionDepth === 0 && useHashId ? hashPath : [...hashPath, section.name];
      return Object.assign({}, section, {
        heading: !!section.name && children.length > 0,
        content:
          children.length > 0 &&
          this.renderLevel(children, useRouterLinks, childHashPath, sectionDepth === 0),
        collapse: isOpenCollapse,
      });
    });
    return (
      <ComponentsList
        items={items}
        hashPath={hashPath}
        useHashId={useHashId}
        useRouterLinks={useRouterLinks}
        isOpenCollapse={isOpenCollapse}
      />
    );
  }

  renderSections() {
    const { searchTerm } = this.state;
    const { sections, useRouterLinks } = this.props;
    // If there is only one section, we treat it as a root section
    // In this case the name of the section won't be rendered and it won't get left padding
    const firstLevel = sections.length === 1 ? sections[0].components : sections;
    const filtered = filterSectionsByName(firstLevel, searchTerm);
    return this.renderLevel(filtered, useRouterLinks);
  }

  render() {
    const {
      className,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme', 'useRouterLinks', 'sections']);
    const {
      searchTerm,
      hasCollapse,
      isOpenCollapse,
    } = this.state;
    return (
      <TableOfContentsRenderer
        className={mapToCssModules(cn(className, 'rsg-toc'), cssModule)}
        searchTerm={searchTerm}
        onSearchTermChange={(searchTerm) => this.setState({ searchTerm })} // eslint-disable-line no-shadow
        {...attributes}
      >
        {hasCollapse && (
          <Button className="collapse-button no-print" onClick={() => this.onChangeCollapse()}>
            <div className="collapse-button-content">
              <P>
                {isOpenCollapse ? 'Collapse all' : 'Expand all'}
                <FontAwesomeIcon
                  className={`collapse-button-content-icon ${!isOpenCollapse ? 'no-collapse' : ''}`}
                  size="lg"
                  icon={['fas', 'angle-up']}
                />
              </P>
            </div>
          </Button>
        )}
        {this.renderSections()}
      </TableOfContentsRenderer>
    );
  }
}

const TableOfContents = styled(TableOfContentsUnstyled)` 
  ${(props) => `
    &.rsg-toc {
      .collapse-button {
        cursor: ${props.theme.styleguide['$rsg-toc-collapse-button-cursor']};
        color: ${props.theme.styleguide['$rsg-toc-collapse-button-color']};
        background: ${props.theme.styleguide['$rsg-toc-collapse-button-background']};
        width: ${props.theme.styleguide['$rsg-toc-collapse-button-width']};
        height: ${props.theme.styleguide['$rsg-toc-collapse-button-height']};
        border-radius: ${props.theme.styleguide['$rsg-toc-collapse-button-border-radius']};
        &:focus, &:active {
          box-shadow: ${props.theme.styleguide['$rsg-toc-collapse-button-active-box-shadow']};
        }
        .collapse-button-content {
          padding: 2px 0 0 0;
          text-align: ${props.theme.styleguide['$rsg-toc-collapse-button-content-text-align']};
          .collapse-button-content-icon {
            padding: ${props.theme.styleguide['$rsg-toc-collapse-button-content-icon-padding']};
            transition: ${props.theme.styleguide['$rsg-toc-collapse-button-content-icon-transition']};
          }
          .collapse-button-content-icon.no-collapse {
            transform: ${props.theme.styleguide['$rsg-toc-collapse-button-content-icon-transform']};
          }
        }
      }
    }
 `}
`;

TableOfContents.defaultProps = defaultProps;
TableOfContents.propTypes = propTypes;
/** @component */
export default TableOfContents;
