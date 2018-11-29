import React from 'react';
import PropTypes from 'prop-types';
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import Img from '@bootstrap-styled/v4/lib/Img';
import Footer from '@bootstrap-styled/v4/lib/Footer';
import A from '@bootstrap-styled/v4/lib/A';
import styled from 'styled-components';
import omit from 'lodash.omit';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules/lib';

export const defaultProps = {
  logo: {
    logo: null,
    href: 'https://bootstrap-styled.github.io/rsg-components',
    target: '_blank',
    alt: '@bootstrap-styled/rsg-components',
  },
  theme: {
    styleguide: {
      '$rsg-footer-margin': '40px 0 60px 0',
      '$rsg-footer-float': 'right',
      '$rsg-footer-img-height': {
        xs: '35px',
        md: '43px',
      },
    },
  },
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string, // eslint-disable-line react/require-default-props
  /** Logo attributes in order to render logo. */
  logo: PropTypes.shape({
    logo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    href: PropTypes.string,
    target: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    styleguide: PropTypes.shape({
      '$rsg-footer-margin': PropTypes.string,
      '$rsg-footer-float': PropTypes.string,
      '$rsg-footer-img-height': PropTypes.shape({
        xs: PropTypes.string,
        md: PropTypes.string,
      }),
    }),
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object, // eslint-disable-line react/require-default-props
};

const FooterRendererUnstyled = (props) => {
  const {
    className,
    logo,
    cssModule,
    ...attributes
  } = omit(props, ['theme']);

  return (
    <Footer
      className={mapToCssModules(cn(className, 'rsg-footer', cssModule))}
      {...attributes}
    >
      {typeof logo.logo === 'string' ? (
        <div>
          {logo.text && (
            <span>{logo.text}</span>
          )}
          <A
            href={logo.href}
            target={logo.target}
            alt={logo.alt}
          >
            <Img
              className="rsg-footer-img"
              src={`data:image/png;base64,${logo.logo}`}
              height={logo.height}
              alt={logo.alt}
            />
          </A>
        </div>
      ) : (
        <A
          href={logo.href}
          target={logo.target}
          alt={logo.alt}
        >
          {logo.logo}
        </A>
      )}
    </Footer>
  );
};

FooterRendererUnstyled.defaultProps = defaultProps;
FooterRendererUnstyled.propTypes = propTypes;

const FooterRenderer = styled(FooterRendererUnstyled)`
  ${(props) => `
    &.rsg-footer {
      margin: ${props.theme.styleguide['$rsg-footer-margin']};
      float: ${props.theme.styleguide['$rsg-footer-float']};
      & .rsg-footer-img {
  ${bp.up(
    'xs',
    props.theme['$grid-breakpoints'],
    `
      height: ${props.theme.styleguide['$rsg-footer-img-height'].xs};
    `
  )}
  ${bp.up(
    'md',
    props.theme['$grid-breakpoints'],
    `
      height: ${props.theme.styleguide['$rsg-footer-img-height'].md};
    `
  )}
      }
    }
  `}
`;

FooterRenderer.defaultProps = defaultProps;
FooterRenderer.propTypes = propTypes;

export default FooterRenderer;
