import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@bootstrap-styled/v4/lib/Collapse';
import Ul from '@bootstrap-styled/v4/lib/Ul';
import Li from '@bootstrap-styled/v4/lib/Li';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hover } from '@bootstrap-styled/css-mixins/lib/hover';
import styled from 'styled-components';
import mapToCssModules from 'map-to-css-modules/lib';
import debounce from 'lodash.debounce';
import cn from 'classnames';
import omit from 'lodash.omit';
import Link from '../Link';

/* eslint-disable react/prop-types */
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Items used to create component list such as table of content and section. Can be: */
  items: PropTypes.arrayOf(PropTypes.shape({
    visibleName: PropTypes.string,
    href: PropTypes.string,
    filepath: PropTypes.string,
    heading: PropTypes.bool,
    sectionDepth: PropTypes.number,
    content: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.bool,
    ]),
    collapse: PropTypes.bool,
    slug: PropTypes.string,
    components: PropTypes.array,
    sections: PropTypes.array,
  })).isRequired,
  /** Toggle use of isolated links. */
  useIsolatedLinks: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types, react/require-default-props
  /** Toggle menu collapse. */
  isOpenCollapse: PropTypes.bool.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-component-list-color': PropTypes.string,
      '$rsg-component-list-font-size': PropTypes.string,
      '$rsg-component-list-line-height': PropTypes.string,
      '$rsg-component-list-heading-button-outline': PropTypes.string,
      '$rsg-component-list-heading-button-border': PropTypes.string,
      '$rsg-component-list-heading-button-cursor': PropTypes.string,
      '$rsg-component-list-heading-margin': PropTypes.string,
      '$rsg-component-list-heading-border-bottom': PropTypes.string,
      '$rsg-component-list-heading-color': PropTypes.string,
      '$rsg-component-list-heading-hover-color': PropTypes.string,
      '$rsg-component-list-heading-font-size': PropTypes.string,
      '$rsg-component-list-icon-margin': PropTypes.string,
      '$rsg-component-list-icon-color': PropTypes.string,
      '$rsg-component-list-icon-transition': PropTypes.string,
      '$rsg-component-list-icon-transform': PropTypes.string,

    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

export const defaultProps = { // eslint-disable-next-line react/default-props-match-prop-types
  theme: {
    styleguide: {
      '$rsg-component-list-color': '#CCCCCC',
      '$rsg-component-list-font-size': '14px',
      '$rsg-component-list-line-height': '2.5',
      '$rsg-component-list-heading-button-outline': 'none',
      '$rsg-component-list-heading-button-border': 'none',
      '$rsg-component-list-heading-button-cursor': 'pointer',
      '$rsg-component-list-heading-margin': '15px 0 0 0',
      '$rsg-component-list-heading-border-bottom': 'none',
      '$rsg-component-list-heading-color': '#292b2c',
      '$rsg-component-list-heading-hover-color': '#B31255',
      '$rsg-component-list-heading-font-size': '16px',
      '$rsg-component-list-icon-margin': '0 15px 0 0',
      '$rsg-component-list-icon-color': '#292b2c',
      '$rsg-component-list-icon-transition': 'transform 1s',
      '$rsg-component-list-icon-transform': 'rotateX(180deg)',
    },
  },
};

class ComponentsListRendererUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    itemList: [],
  }

  componentWillMount() {
    this.updateItems(this.props.items, () => {
      const newState = {};
      this.state.itemList.forEach(({
        heading,
        visibleName,
        sectionDepth,
        collapse,
      }) => {
        if (heading) {
          newState[`${visibleName}-is-open`] = collapse;
          newState[`${visibleName}-index`] = sectionDepth;
        }
      });
      this.setState(newState);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.items.length !== nextProps.items.length) {
      this.updateItems(nextProps.items);
    }
    if (this.props.isOpenCollapse !== nextProps.isOpenCollapse) {
      this.updateCollapseItems(nextProps.isOpenCollapse);
    }
  }

  onClick = (visibleName) => {
    this.setState({
      [`${visibleName}-is-open`]: !this.state[`${visibleName}-is-open`],
    });
  }

  updateItems(items, cb) {
    this.setState({
      itemList: items.filter((item) => item.visibleName),
    }, cb);
  }
  updateCollapseItems(isCollapse) {
    const newState = {};
    this.state.itemList.forEach(({ heading, visibleName }) => {
      if (heading) {
        newState[`${visibleName}-is-open`] = isCollapse;
      }
    });
    this.setState(newState);
  }

  render() {
    const {
      className,
      cssModule,
      ...attributes
    } = omit(this.props, ['theme', 'isOpenCollapse', 'items']);
    const { itemList } = this.state;
    if (!itemList.length) {
      return null;
    }
    return (
      <Ul
        className={mapToCssModules(cn(className, 'rsg-component-list'), cssModule)}
        {...attributes}
      >
        {itemList.map(({
          heading,
          visibleName,
          href,
          content,
          sectionDepth,
        }) => (
          <Li
            key={href}
            className={`list-${sectionDepth}`}
          >
            {heading ? (
              <div
                role="button"
                tabIndex="0"
                onClick={debounce(() => this.onClick(visibleName), 300)}
                onKeyPress={debounce(() => this.onClick(visibleName), 300)}
                className="list-button font-weight-bold d-flex align-items-center justify-content-between"
              >
                <Link
                  className={`level-${sectionDepth}`}
                  href={href}
                >
                  {visibleName}
                </Link>
                <FontAwesomeIcon
                  className={`rsg-component-list-icon font-weight-bold ${!this.state[`${visibleName}-is-open`] ? 'no-collapse' : ''}`}
                  size="lg"
                  icon={['fas', 'angle-up']}
                />
              </div>
            ) : (
              <Link
                className={`level-${sectionDepth}`}
                href={href}
              >
                {visibleName}
              </Link>
            )}{content ? (
              <Collapse isOpen={this.state[`${visibleName}-is-open`]} className="font-weight-normal mt-2">
                {content}
              </Collapse>
            ) : null}
          </Li>
        ))}
      </Ul>
    );
  }
}

const ComponentsListRenderer = styled(ComponentsListRendererUnstyled)` 
  ${(props) => `
    &.rsg-component-list {
        color: ${props.theme.styleguide['$rsg-component-list-color']};
        font-size: ${props.theme.styleguide['$rsg-component-list-font-size']};
        line-height: ${props.theme.styleguide['$rsg-component-list-line-height']};
        .list-0 {
          margin: ${props.theme.styleguide['$rsg-component-list-heading-margin']};
          border-bottom: ${props.theme.styleguide['$rsg-component-list-heading-border-bottom']};
          .list-button {
            outline: ${props.theme.styleguide['$rsg-component-list-heading-button-outline']};
            border: ${props.theme.styleguide['$rsg-component-list-heading-button-border']};
            cursor: ${props.theme.styleguide['$rsg-component-list-heading-button-cursor']};
          }
        }
      & .level-0, .level-1, .level-2 {
        color: ${props.theme.styleguide['$rsg-component-list-heading-color']};
  ${hover(
    `
      color: ${props.theme.styleguide['$rsg-component-list-heading-hover-color']};

    `
  )}
        font-size: ${props.theme.styleguide['$rsg-component-list-heading-font-size']};
      }
      & .rsg-component-list-icon {
        margin: ${props.theme.styleguide['$rsg-component-list-icon-margin']};
        color: ${props.theme.styleguide['$rsg-component-list-icon-color']};
        transition: ${props.theme.styleguide['$rsg-component-list-icon-transition']};
      }
      & .rsg-component-list-icon.no-collapse {
        transform: ${props.theme.styleguide['$rsg-component-list-icon-transform']};
      }
    }
 `}
`;

ComponentsListRenderer.propTypes = propTypes;
ComponentsListRenderer.defaultProps = defaultProps;

/** @component */
export default ComponentsListRenderer;
