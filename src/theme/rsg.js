
export function makeTheme(userTheme = { styleguide: {} }) {
  const newTheme = { styleguide: {} };
  const v = newTheme.styleguide;
  const u = userTheme.styleguide || {};
  // STYLEGUIDE GENERAL VARIABLE
  // space
  v['$rsg-space-factor'] = u['$rsg-space-factor'] || '8';
  v['$rsg-space-factor-unit'] = u['$rsg-space-factor-unit'] || 'px';
  v['$rsg-space'] = u['$rsg-space'] || {
    xxs: `${v['$rsg-space-factor'] / 2}${v['$rsg-space-factor-unit']}`, // 4px
    xs: `${v['$rsg-space-factor']}${v['$rsg-space-factor-unit']}`, // 8px
    sm: `${v['$rsg-space-factor'] * 2}${v['$rsg-space-factor-unit']}`, // 16px
    md: `${v['$rsg-space-factor'] * 3}${v['$rsg-space-factor-unit']}`, // 24px
    lg: `${v['$rsg-space-factor'] * 4}${v['$rsg-space-factor-unit']}`, // 32px
    xl: `${v['$rsg-space-factor'] * 5}${v['$rsg-space-factor-unit']}`, // 40px
    xxl: `${v['$rsg-space-factor'] * 6}${v['$rsg-space-factor-unit']}`, // 48px
    xxxl: `${v['$rsg-space-factor'] * 7}${v['$rsg-space-factor-unit']}`, // 56px
  };
  // font
  // - font-family
  v['$rsg-font-family-base'] = u['$rsg-font-family-base'] || '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"';
  v['$rsg-font-family-monospace'] = u['$rsg-font-family-monospace'] || 'Consolas, "Liberation Mono", Menlo, monospace';
  v['$rsg-font-family-highlight'] = u['$rsg-font-family-highlight'] || 'SF Mono, Monaco, "Inconsolata", "Fira Code", "Fira Mono", "Droid Sans Mono", Consolas, "Roboto Mono", "Source Code Pro", monospace';
  // - font-size
  v['$rsg-font-size'] = u['$rsg-font-size'] || {
    xs: '12px',
    sm: '13px',
    md: '15px',
    lg: '16px',
    xl: '25px',
  };
  // color
  v['$rsg-white'] = u['$rsg-white'] || '#fff';
  v['$rsg-gray-lighter'] = u['$rsg-gray-lighter'] || '#F7F7F9';
  v['$rsg-gray-light'] = u['$rsg-gray-light'] || '#CCCCCC';
  v['$rsg-gray'] = u['$rsg-gray'] || '#767676';
  v['$rsg-gray-dark'] = u['$rsg-gray-dark'] || '#292b2c';
  v['$rsg-fuchsia'] = u['$rsg-fuchsia'] || '#B31255';
  v['$rsg-ocher'] = u['$rsg-ocher'] || '#fc971b';
  v['$rsg-salmon'] = u['$rsg-salmon'] || '#f47469';
  v['$rsg-purple'] = u['$rsg-purple'] || '#3A007D';
  // main color styleguide
  v['$rsg-color-primary'] = u['$rsg-color-primary'] || v['$rsg-fuchsia'];
  v['$rsg-color-secondary'] = u['$rsg-color-secondary'] || v['$rsg-purple'];
  v['$rsg-color-gradient'] = u['$rsg-color-gradient'] || `linear-gradient(${v['$rsg-purple']}, ${v['$rsg-fuchsia']})`;
  v['$rsg-color-base'] = u['$rsg-color-base'] || v['$rsg-gray-dark'];
  v['$rsg-color-light'] = u['$rsg-color-light'] || v['$rsg-gray'];
  v['$rsg-color-lightest'] = u['$rsg-color-lightest'] || v['$rsg-gray-light'];
  v['$rsg-color-link'] = u['$rsg-color-link'] || v['$rsg-color-secondary'];
  v['$rsg-color-linkHover'] = u['$rsg-color-linkHover'] || v['$rsg-color-primary'];
  v['$rsg-color-border'] = u['$rsg-color-border'] || v['$rsg-gray-light'];
  v['$rsg-color-name'] = u['$rsg-color-name'] || v['$rsg-color-primary'];
  v['$rsg-color-type'] = u['$rsg-color-type'] || v['$rsg-color-secondary'];
  v['$rsg-color-error'] = u['$rsg-color-error'] || v['$rsg-salmon'];
  v['$rsg-color-base-background'] = u['$rsg-color-base-background'] || v['$rsg-white'];
  v['$rsg-color-code-background'] = u['$rsg-color-code-background'] || v['$rsg-gray-lighter'];
  v['$rsg-color-sidebar-background'] = u['$rsg-color-sidebar-background'] || v['$rsg-color-gradient'];
  v['$rsg-color-ribbon-background'] = u['$rsg-color-ribbon-background'] || v['$rsg-color-gradient'];
  v['$rsg-color-ribbon-text'] = u['$rsg-color-ribbon-text'] || v['$rsg-white'];
  // border radius
  v['$rsg-border-radius'] = u['$rsg-border-radius'] || '3px';
  // width
  // - max width
  v['$rsg-max-width'] = u['$rsg-max-width'] || '2500px';
  // - sidebar
  v['$rsg-sidebar-width'] = u['$rsg-sidebar-width'] || '240px';
  // cursor
  v['$rsg-cursor'] = u['$rsg-cursor'] || 'pointer';

  // STYLEGUIDE COMPONENTS
  // styleguide
  v['$rsg-styleguide-background-color'] = u['$rsg-styleguide-background-color'] || v['$rsg-color-base-background'];
  v['$rsg-styleguide-has-sidebar-padding-left'] = u['$rsg-styleguide-has-sidebar-padding-left'] || {
    xs: '0',
    sm: '0',
    md: '30px',
    lg: v['$rsg-sidebar-width'],
  };
  v['$rsg-styleguide-content-max-width'] = u['$rsg-styleguide-content-max-width'] || v['$rsg-max-width'];
  v['$rsg-styleguide-content-margin'] = u['$rsg-styleguide-content-margin'] || '0 auto';
  v['$rsg-styleguide-content-display'] = u['$rsg-styleguide-content-display'] || 'block';
  v['$rsg-styleguide-no-print-display'] = u['$rsg-styleguide-no-print-display'] || 'none';
  v['$rsg-styleguide-content-transition'] = u['$rsg-styleguide-content-transition'] || 'transform ease-out 500ms';
  v['$rsg-styleguide-content-padding'] = u['$rsg-styleguide-content-padding'] || {
    xs: '0 10px',
    lg: '0 60px',
  };
  v['$rsg-styleguide-content-width'] = u['$rsg-styleguide-content-width'] || {
    md: '60%',
    lg: '90%',
  };
  v['$rsg-styleguide-content-sidebar-open-transform'] = u['$rsg-styleguide-content-sidebar-open-transform'] || {
    md: 'translateX(120px)',
    lg: 'translateX(0)',
  };
  v['$rsg-styleguide-content-sidebar-close-transform'] = u['$rsg-styleguide-content-sidebar-close-transform'] || 'translateX(0px)';
  v['$rsg-styleguide-sidebar-z-index'] = u['$rsg-styleguide-sidebar-z-index'] || '4000';
  v['$rsg-styleguide-sidebar-transform'] = u['$rsg-styleguide-sidebar-transform'] || 'translateX(0)';
  v['$rsg-styleguide-sidebar-open-transition'] = u['$rsg-styleguide-sidebar-open-transition'] || 'transform ease-out 500ms';
  v['$rsg-styleguide-sidebar-open-transform'] = u['$rsg-styleguide-sidebar-open-transform'] || {
    md: 'translateX(0px)',
    lg: 'translateX(0px)',
  };
  v['$rsg-styleguide-sidebar-close-transition'] = u['$rsg-styleguide-sidebar-close-transition'] || 'transform ease-out 500ms';
  v['$rsg-styleguide-sidebar-close-transform'] = u['$rsg-styleguide-sidebar-close-transform'] || {
    md: 'translateX(-260px)',
    lg: 'translateX(0px)',
  };
  v['$rsg-styleguide-sidebar-button-transform'] = u['$rsg-styleguide-sidebar-button-transform'] || 'rotate(0deg)';
  v['$rsg-styleguide-sidebar-button-padding'] = u['$rsg-styleguide-sidebar-button-padding'] || '10px 0 0 0';
  v['$rsg-styleguide-sidebar-button-color'] = u['$rsg-styleguide-sidebar-button-color'] || '#B31255';
  v['$rsg-styleguide-sidebar-button-box-shadow'] = u['$rsg-styleguide-sidebar-button-box-shadow'] || 'none';
  v['$rsg-styleguide-sidebar-button-position'] = u['$rsg-styleguide-sidebar-button-position'] || 'fixed';
  v['$rsg-styleguide-sidebar-button-transition'] = u['$rsg-styleguide-sidebar-button-transition'] || 'all 500ms';
  v['$rsg-styleguide-sidebar-button-hover-color'] = u['$rsg-styleguide-sidebar-button-hover-color'] || '#3A007D';
  v['$rsg-styleguide-sidebar-button-outline'] = u['$rsg-styleguide-sidebar-button-outline'] || '0';
  v['$rsg-styleguide-sidebar-button-visibility'] = u['$rsg-styleguide-sidebar-button-visibility'] || {
    xs: 'hidden',
    md: 'visible',
    lg: 'hidden',
  };
  v['$rsg-styleguide-sidebar-open-button-transition'] = u['$rsg-styleguide-sidebar-open-button-transition'] || 'transform ease-out 500ms';
  v['$rsg-styleguide-sidebar-open-button-transform'] = u['$rsg-styleguide-sidebar-open-button-transform'] || 'translateX(193px) rotate(90deg)';
  v['$rsg-styleguide-sidebar-close-button-transition'] = u['$rsg-styleguide-sidebar-close-button-transition'] || 'transform 700ms';
  v['$rsg-styleguide-sidebar-close-button-z-index'] = u['$rsg-styleguide-sidebar-close-button-z-index'] || '-500';
  v['$rsg-styleguide-sidebar-close-button-transform'] = u['$rsg-styleguide-sidebar-close-button-transform'] || {
    sm: 'translateX(-20px)',
    md: 'translateX(0px)',
    lg: 'translateX(-10px)',
  };
  // heading
  v['$rsg-heading-margin'] = u['$rsg-heading-margin'] || '0';
  v['$rsg-heading-color'] = u['$rsg-heading-color'] || v['$rsg-color-base'];
  v['$rsg-heading-padding'] = u['$rsg-heading-padding'] || '20px 0 15px 0';
  v['$rsg-heading-line-height'] = u['$rsg-heading-line-height'] || '1';
  v['$rsg-heading-mobile-font-size'] = u['$rsg-heading-mobile-font-size-h1'] || {
    h1: '30px',
    h2: '24px',
    h3: '20px',
    h4: '18px',
    h5: '16px',
    h6: '15px',
  };
  v['$rsg-heading-font-size-h1'] = u['$rsg-heading-font-size-h1'] || '30px';
  v['$rsg-heading-h2'] = u['$rsg-heading-h2'] || '30px';
  v['$rsg-heading-h3'] = u['$rsg-heading-h3'] || '30px';
  v['$rsg-heading-h4'] = u['$rsg-heading-h4'] || '30px';
  v['$rsg-heading-h5'] = u['$rsg-heading-h5'] || '30px';
  v['$rsg-heading-h6'] = u['$rsg-heading-h6'] || '30px';
  // toolbar
  v['$rsg-toolbar-button-padding'] = u['$rsg-toolbar-button-padding'] || '0';
  v['$rsg-toolbar-button-color'] = u['$rsg-toolbar-button-color'] || v['$rsg-color-base'];
  v['$rsg-toolbar-button-background'] = u['$rsg-toolbar-button-background'] || 'transparent';
  v['$rsg-toolbar-button-transition'] = u['$rsg-toolbar-button-transition'] || 'color 750ms ease-out';
  v['$rsg-toolbar-button-cursor'] = u['$rsg-toolbar-button-cursor'] || 'pointer';
  v['$rsg-toolbar-button-hover-focus-isolation'] = u['$rsg-toolbar-button-hover-focus-isolation'] || 'false';
  v['$rsg-toolbar-button-hover-focus-color'] = u['$rsg-toolbar-button-hover-focus-color'] || v['$rsg-color-primary'];
  v['$rsg-toolbar-button-hover-focus-transition'] = u['$rsg-toolbar-button-hover-focus-transition'] || 'color 150ms ease-in';
  v['$rsg-toolbar-button-focus-isolation'] = u['$rsg-toolbar-button-focus-isolation'] || 'false';
  v['$rsg-toolbar-button-focus-outline'] = u['$rsg-toolbar-button-focus-outline'] || `1 dotted ${v['$rsg-color-primary']}`;
  v['$rsg-toolbar-button-children-isolation'] = u['$rsg-toolbar-button-children-isolation'] || 'false';
  v['$rsg-toolbar-button-children-margin-left'] = u['$rsg-toolbar-button-children-margin-left'] || '0';
  v['$rsg-toolbar-button-svg-width'] = u['$rsg-toolbar-button-svg-width'] || v['$rsg-space'].md;
  v['$rsg-toolbar-button-svg-height'] = u['$rsg-toolbar-button-svg-height'] || v['$rsg-space'].md;
  v['$rsg-toolbar-button-svg-color'] = u['$rsg-toolbar-button-svg-color'] || v['$rsg-gray'];
  v['$rsg-toolbar-button-svg-cursor'] = u['$rsg-toolbar-button-svg-cursor'] || 'inherit';
  v['$rsg-toolbar-button-small-width'] = u['$rsg-toolbar-button-small-width'] || '14px';
  v['$rsg-toolbar-button-small-height'] = u['$rsg-toolbar-button-small-height'] || '14px';
  // path-line
  v['$rsg-path-line-font-family'] = u['$rsg-path-line-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-path-line-color'] = u['$rsg-path-line-color'] || v['$rsg-gray-light'];
  v['$rsg-path-line-font-size'] = u['$rsg-path-line-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-path-line-copy-button-margin'] = u['$rsg-path-line-copy-button-margin'] || '0 0 0 0';
  v['$rsg-path-line-copy-button-border'] = u['$rsg-path-line-copy-button-border'] || 'none';
  v['$rsg-path-line-copy-button-outline'] = u['$rsg-path-line-copy-button-outline'] || 'none';
  v['$rsg-path-line-copy-button-box-shadow'] = u['$rsg-path-line-copy-button-box-shadow'] || 'none';
  v['$rsg-path-line-cursor'] = u['$rsg-path-line-cursor'] || v['$rsg-cursor'];
  v['$rsg-path-line-icon-color'] = u['$rsg-path-line-icon-color'] || v['$rsg-path-line-color'];
  v['$rsg-path-line-icon-font-size'] = u['$rsg-path-line-icon-font-size'] || v['$rsg-path-line-font-size'];
  v['$rsg-path-line-icon-cursor'] = u['$rsg-path-line-icon-cursor'] || v['$rsg-cursor'];
  v['$rsg-path-line-icon-bottom'] = u['$rsg-path-line-icon-bottom'] || '3px';
  v['$rsg-path-line-icon-hover-color'] = u['$rsg-path-line-icon-hover-color'] || v['$rsg-color-primary'];
  // tab-button
  v['$rsg-tab-button-padding'] = u['$rsg-tab-button-padding'] || `${v['$rsg-space'].xs} 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-tab-button-font-family'] = u['$rsg-tab-button-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-tab-button-font-size'] = u['$rsg-tab-button-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-tab-button-color'] = u['$rsg-tab-button-color'] || v['$rsg-gray'];
  v['$rsg-tab-button-background'] = u['$rsg-tab-button-background'] || 'transparent';
  v['$rsg-tab-button-text-transform'] = u['$rsg-tab-button-text-transform'] || 'uppercase';
  v['$rsg-tab-button-transition'] = u['$rsg-tab-button-transition'] || 'color 750ms ease-out';
  v['$rsg-tab-button-border'] = u['$rsg-tab-button-border'] || 'none';
  v['$rsg-tab-button-cursor'] = u['$rsg-tab-button-cursor'] || 'pointer';
  v['$rsg-tab-button-box-shadow'] = u['$rsg-tab-button-box-shadow'] || 'none';
  v['$rsg-tab-button-hover-focus-isolate'] = u['$rsg-tab-button-hover-focus-isolate'] || 'false';
  v['$rsg-tab-button-hover-focus-outline'] = u['$rsg-tab-button-hover-focus-outline'] || '0';
  v['$rsg-tab-button-hover-focus-color'] = u['$rsg-tab-button-hover-focus-color'] || v['$rsg-color-primary'];
  v['$rsg-tab-button-hover-focus-transition'] = u['$rsg-tab-button-hover-focus-transition'] || 'color 150ms ease-in';
  v['$rsg-tab-button-focus-not-active-isolate'] = u['$rsg-tab-button-focus-not-active-isolate'] || 'false';
  v['$rsg-tab-button-focus-not-active-outline'] = u['$rsg-tab-button-focus-not-active-outline'] || '0';
  v['$rsg-tab-button-children-isolate'] = u['$rsg-tab-button-children-isolate'] || 'false';
  v['$rsg-tab-button-children-margin-left'] = u['$rsg-tab-button-children-margin-left'] || '0';
  v['$rsg-tab-button-border-bottom'] = u['$rsg-tab-button-border-bottom'] || '2px #f28a25 solid';
  // Props table
  v['$rsg-name-word-wrap'] = u['$rsg-name-word-wrap'] || 'break-word';
  v['$rsg-name-font-size'] = u['$rsg-name-font-size'] || {
    xs: v['$rsg-font-size'].xs,
    sm: '15px',
  };
  v['$rsg-name-color'] = u['$rsg-name-color'] || v['$rsg-color-name'];
  v['$rsg-name-deprecated-color'] = u['$rsg-name-deprecated-color'] || v['$rsg-salmon'];
  v['$rsg-name-deprecated-decoration'] = u['$rsg-name-deprecated-decoration'] || 'line-through';
  v['$rsg-text-font-size'] = u['$rsg-name-font-size'] || {
    inherit: 'inherit',
    sm: '0.8em',
    base: '1em',
    text: '1.2em',
  };
  v['$rsg-text-color'] = u['$rsg-text-color'] || v['$rsg-color-base'];
  v['$rsg-text-color-light'] = u['$rsg-text-color-light'] || v['$rsg-gray'];
  v['$rsg-text-border-top'] = u['$rsg-text-border-top'] || '0';
  v['$rsg-text-border-bottom'] = u['$rsg-text-border-bottom'] || `1px dotted ${v['$rsg-gray-light']}`;
  v['$rsg-text-font-family'] = u['$rsg-text-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-type-font-size'] = u['$rsg-type-font-size'] || {
    xs: v['$rsg-font-size'].xs,
    sm: '15px',
  };
  v['$rsg-type-color'] = u['$rsg-type-color'] || v['$rsg-color-type'];
  v['$rsg-para-margin'] = u['$rsg-para-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-para-color'] = u['$rsg-para-color'] || v['$rsg-color-base'];
  v['$rsg-para-font-family'] = u['$rsg-para-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-para-font-size'] = u['$rsg-para-font-size'] || 'inherit';
  v['$rsg-para-line-height'] = u['$rsg-para-line-height'] || '1.5';
  v['$rsg-props-description-font-size'] = u['$rsg-props-description-font-size'] || v['$rsg-font-size'].sm;
  // argument
  v['$rsg-argument-margin'] = u['$rsg-argument-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  // arguments
  v['$rsg-arguments-margin'] = u['$rsg-arguments-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-arguments-font-size'] = u['$rsg-arguments-font-size'] || 'inherit';
  v['$rsg-arguments-heading-margin'] = u['$rsg-arguments-heading-margin'] || `0 0 ${v['$rsg-space'].xxs} 0`;
  // editor
  v['$rsg-editor-isolate'] = u['$rsg-editor-isolate'] || 'false';
  v['$rsg-editor-font-family'] = u['$rsg-editor-font-family'] || v['$rsg-font-family-monospace'];
  v['$rsg-editor-font-size'] = u['$rsg-editor-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-editor-bg-color'] = u['$rsg-editor-bg-color'] || '#f5f5f5';
  v['$rsg-editor-transition'] = u['$rsg-editor-transition'] || 'all ease-in-out .1s';
  v['$rsg-editor-border-color'] = u['$rsg-editor-border-color'] || '#e8e8e8';
  v['$rsg-editor-border-radius'] = u['$rsg-editor-border-radius'] || '3px';
  v['$rsg-editor-focus-outline'] = u['$rsg-editor-focus-outline'] || '0';
  v['$rsg-editor-focus-border-color'] = u['$rsg-editor-focus-border-color'] || '#1673b1';
  v['$rsg-editor-focus-box-shadow'] = u['$rsg-editor-focus-box-shadow'] || '0, 0, 0, 2, rgba(22, 115, 177, 0.25)';
  v['$rsg-editor-code-comment-color'] = u['$rsg-editor-code-comment-color'] || '#6d6d6d';
  v['$rsg-editor-code-punctuation-color'] = u['$rsg-editor-code-punctuation-color'] || '#999';
  v['$rsg-editor-code-namespace-opacity'] = u['$rsg-editor-code-namespace-opacity'] || '0.7';
  v['$rsg-editor-code-property-color'] = u['$rsg-editor-code-property-color'] || '#905';
  v['$rsg-editor-code-deleted-color'] = u['$rsg-editor-code-deleted-color'] || '#905';
  v['$rsg-editor-code-string-color'] = u['$rsg-editor-code-string-color'] || '#690';
  v['$rsg-editor-code-inserted-color'] = u['$rsg-editor-code-inserted-color'] || '#690';
  v['$rsg-editor-code-operator-color'] = u['$rsg-editor-code-operator-color'] || '#9a6e3a';
  v['$rsg-editor-code-keyword-color'] = u['$rsg-editor-code-keyword-color'] || '#1673b1';
  v['$rsg-editor-code-function-color'] = u['$rsg-editor-code-function-color'] || '#DD4A68';
  v['$rsg-editor-code-variable-color'] = u['$rsg-editor-code-variable-color'] || '#e90';
  v['$rsg-editor-code-font-weight'] = u['$rsg-editor-code-font-weight'] || 'bold';
  v['$rsg-editor-code-font-style'] = u['$rsg-editor-code-font-style'] || 'italic';
  v['$rsg-editor-code-cursor'] = u['$rsg-editor-code-cursor'] || 'help';
  // editor-loader
  v['$rsg-editor-loader-padding'] = u['$rsg-editor-loader-padding'] || `2px ${v['$rsg-space'].xs} 2px 2px`;
  v['$rsg-editor-loader-font-family'] = u['$rsg-editor-loader-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-editor-loader-font-size'] = u['$rsg-editor-loader-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-editor-loader-color'] = u['$rsg-editor-loader-color'] || v['$rsg-gray'];
  v['$rsg-editor-loader-background-color'] = u['$rsg-editor-loader-background-color'] || v['$rsg-color-code-background'];
  // error
  v['$rsg-error-margin'] = u['$rsg-error-margin'] || v['$rsg-space'].xs;
  v['$rsg-error-line-height'] = u['$rsg-error-line-height'] || '1.2';
  v['$rsg-error-font-size'] = u['$rsg-error-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-error-stack-color'] = u['$rsg-error-stack-color'] || v['$rsg-color-error'];
  v['$rsg-error-stack-white-space'] = u['$rsg-error-stack-white-space'] || 'pre';
  v['$rsg-error-stack-font-family'] = u['$rsg-error-stack-font-family'] || v['$rsg-font-family-monospace'];
  v['$rsg-error-message-color'] = u['$rsg-error-message-color'] || v['$rsg-color-error'];
  v['$rsg-error-message-font-family'] = u['$rsg-error-message-font-family'] || v['$rsg-font-family-base'];
  // examples
  v['$rsg-section-examples-padding'] = u['$rsg-section-examples-padding'] || '0';

  // example placeholder
  v['$rsg-example-placeholder-outline'] = u['$rsg-example-placeholder-outline'] || 'none';
  v['$rsg-example-placeholder-padding'] = u['$rsg-example-placeholder-padding'] || '0';
  v['$rsg-example-placeholder-font-size'] = u['$rsg-example-placeholder-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-example-placeholder-font-family'] = u['$rsg-example-placeholder-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-example-placeholder-decoration'] = u['$rsg-example-placeholder-decoration'] || 'underline';
  v['$rsg-example-placeholder-color'] = u['$rsg-example-placeholder-color'] || v['$rsg-gray'];
  v['$rsg-example-placeholder-border'] = u['$rsg-example-placeholder-border'] || 'none';
  v['$rsg-example-placeholder-cursor'] = u['$rsg-example-placeholder-cursor'] || v['$rsg-cursor'];
  v['$rsg-example-placeholder-background'] = u['$rsg-example-placeholder-background'] || 'transparent';
  v['$rsg-example-placeholder-hover-isolate'] = u['$rsg-example-placeholder-hover-isolate'] || 'false';
  v['$rsg-example-placeholder-hover-color'] = u['$rsg-example-placeholder-hover-color'] || v['$rsg-gray-light'];
  // footer
  v['$rsg-footer-margin'] = u['$rsg-footer-margin'] || `${v['$rsg-space'].md} 0 60px 0`;
  v['$rsg-footer-float'] = u['$rsg-footer-float'] || 'right';
  v['$rsg-footer-img-height'] = u['$rsg-footer-img-height'] || {
    xs: '25px',
    md: '30px',
  };
  // link
  v['$rsg-link-hover-isolate'] = u['$rsg-link-hover-isolate'] || 'false';
  // logo
  v['$rsg-logo-color'] = u['$rsg-logo-color'] || v['$rsg-white'];
  v['$rsg-logo-margin'] = u['$rsg-logo-margin'] || '0';
  v['$rsg-logo-font-family'] = u['$rsg-logo-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-logo-font-size'] = u['$rsg-logo-font-size'] || v['$rsg-font-size'].xl;
  v['$rsg-logo-font-weight'] = u['$rsg-logo-font-weight'] || 'normal';
  // message
  v['$rsg-message-margin'] = u['$rsg-message-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  // playground
  v['$rsg-playground-margin'] = u['$rsg-playground-margin'] || '0';
  v['$rsg-playground-preview-padding'] = u['$rsg-playground-preview-padding'] || v['$rsg-space'].md;
  v['$rsg-playground-preview-border'] = u['$rsg-playground-preview-border'] || '1px #e8e8e8 solid';
  v['$rsg-playground-preview-border-radius'] = u['$rsg-playground-preview-border-radius'] || v['$rsg-border-radius'];
  v['$rsg-playground-preview-width'] = u['$rsg-playground-preview-width'] || '100%';
  v['$rsg-playground-preview-display'] = u['$rsg-playground-preview-display'] || 'inline-block';
  v['$rsg-playground-controls-display'] = u['$rsg-playground-controls-display'] || 'flex';
  v['$rsg-playground-controls-align-items'] = u['$rsg-playground-controls-align-items'] || 'center';
  v['$rsg-playground-toolbar-margin'] = u['$rsg-playground-toolbar-margin'] || '0 0 0 auto';
  // playground-error
  v['$rsg-playground-error-margin'] = u['$rsg-playground-error-margin'] || '0';
  v['$rsg-playground-error-line-height'] = u['$rsg-playground-error-line-height'] || '1.2';
  v['$rsg-playground-error-font-size'] = u['$rsg-playground-error-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-playground-error-font-family'] = u['$rsg-playground-error-font-family'] || v['$rsg-font-family-monospace'];
  v['$rsg-playground-error-color'] = u['$rsg-playground-error-color'] || v['$rsg-color-error'];
  v['$rsg-playground-error-white-space'] = u['$rsg-playground-error-white-space'] || 'pre';
  // react-component
  v['$rsg-react-component-margin'] = u['$rsg-react-component-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-react-component-header-margin'] = u['$rsg-react-component-header-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-react-component-docs-color'] = u['$rsg-react-component-docs-color'] || v['$rsg-color-base'];
  v['$rsg-react-component-docs-font-size'] = u['$rsg-react-component-docs-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-react-component-tabs-overflow-x'] = u['$rsg-react-component-tabs-overflow-x'] || 'auto';
  v['$rsg-react-component-tabs-overflow-y'] = u['$rsg-react-component-tabs-overflow-y'] || 'hidden';
  v['$rsg-react-component-tabs-margin'] = u['$rsg-react-component-tabs-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-react-component-tabs-button-margin'] = u['$rsg-react-component-tabs-button-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  // ribbon
  v['$rsg-ribbon-bp-visibility'] = u['$rsg-ribbon-bp-visibility'] || {
    xs: 'hidden',
    md: 'visible',
  };
  v['$rsg-ribbon-position'] = u['$rsg-ribbon-position'] || 'fixed';
  v['$rsg-ribbon-top'] = u['$rsg-ribbon-top'] || '0';
  v['$rsg-ribbon-right'] = u['$rsg-ribbon-right'] || '0';
  v['$rsg-ribbon-width'] = u['$rsg-ribbon-width'] || '149px';
  v['$rsg-ribbon-height'] = u['$rsg-ribbon-height'] || '149px';
  v['$rsg-ribbon-z-index'] = u['$rsg-ribbon-z-index'] || '999';
  v['$rsg-ribbon-link-font-family'] = u['$rsg-ribbon-link-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-ribbon-link-position'] = u['$rsg-ribbon-link-position'] || 'relative';
  v['$rsg-ribbon-link-right'] = u['$rsg-ribbon-link-right'] || '-37px';
  v['$rsg-ribbon-link-top'] = u['$rsg-ribbon-link-top'] || '-22px';
  v['$rsg-ribbon-link-display'] = u['$rsg-ribbon-link-display'] || 'block';
  v['$rsg-ribbon-link-width'] = u['$rsg-ribbon-link-width'] || '190px';
  v['$rsg-ribbon-link-padding'] = u['$rsg-ribbon-link-padding'] || `${v['$rsg-space'].xxs} ${v['$rsg-space'].xs}`;
  v['$rsg-ribbon-link-text-align'] = u['$rsg-ribbon-link-text-align'] || 'center';
  v['$rsg-ribbon-link-color'] = u['$rsg-ribbon-link-color'] || v['$rsg-color-ribbon-text'];
  v['$rsg-ribbon-link-font-size'] = u['$rsg-ribbon-link-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-ribbon-link-background'] = u['$rsg-ribbon-link-background'] || v['$rsg-color-ribbon-background'];
  v['$rsg-ribbon-link-decoration'] = u['$rsg-ribbon-link-decoration'] || 'none';
  v['$rsg-ribbon-link-shadow'] = u['$rsg-ribbon-link-shadow'] || '0 -1px 0 rgba(0,0,0,.15)';
  v['$rsg-ribbon-link-transform-origin'] = u['$rsg-ribbon-link-transform-origin'] || '0 0';
  v['$rsg-ribbon-link-transform'] = u['$rsg-ribbon-link-transform'] || 'rotate(45deg)';
  v['$rsg-ribbon-link-cursor'] = u['$rsg-ribbon-link-cursor'] || v['$rsg-cursor'];
  // section
  v['$rsg-section-margin'] = u['$rsg-section-margin'] || '40px 0 0 0';
  v['$rsg-section-isolated-margin'] = u['$rsg-section-isolated-margin'] || '0';
  // section-heading
  v['$rsg-section-heading-display'] = u['$rsg-section-heading-display'] || 'flex';
  v['$rsg-section-heading-flex-direction'] = u['$rsg-section-heading-flex-direction'] || 'row';
  v['$rsg-section-heading-align-items'] = u['$rsg-section-heading-align-items'] || 'center';
  v['$rsg-section-heading-margin-bottom'] = u['$rsg-section-heading-margin-bottom'] || v['$rsg-space'].xs;
  v['$rsg-section-heading-section-name-isolation'] = u['$rsg-section-heading-section-name-isolation'] || 'auto';
  v['$rsg-section-heading-section-name-text-decoration'] = u['$rsg-section-heading-section-name-text-decoration'] || 'none';
  v['$rsg-section-heading-section-name-cursor'] = u['$rsg-section-heading-section-name-cursor'] || 'pointer';
  v['$rsg-section-heading-section-name-color'] = u['$rsg-section-heading-section-name-color'] || v['$rsg-color-name'];
  v['$rsg-section-heading-anchor-font-size'] = u['$rsg-section-heading-anchor-font-size'] || '15px';
  v['$rsg-section-heading-anchor-font-weight'] = u['$rsg-section-heading-anchor-font-weight'] || 'normal';
  v['$rsg-section-heading-anchor-transform'] = u['$rsg-section-heading-anchor-transform'] || 'rotate(-5deg)';
  v['$rsg-section-heading-anchor-color'] = u['$rsg-section-heading-anchor-color'] || v['$rsg-gray-light'];
  v['$rsg-section-heading-anchor-padding'] = u['$rsg-section-heading-anchor-padding'] || '6px 5px 0 0';
  v['$rsg-section-heading-anchor-display'] = u['$rsg-section-heading-anchor-display'] || 'table-cell';
  v['$rsg-section-heading-anchor-vertical-align'] = u['$rsg-section-heading-anchor-vertical-align'] || 'middle';
  v['$rsg-section-heading-deprecated-text-decoration'] = u['$rsg-section-heading-deprecated-text-decoration'] || 'line-through';
  v['$rsg-section-heading-deprecated-cursor'] = u['$rsg-section-heading-deprecated-cursor'] || v['$rsg-gray'];
  v['$rsg-section-heading-toolbar-margin-left'] = u['$rsg-section-heading-toolbar-margin-left'] || 'auto';
  v['$rsg-section-heading-1-color'] = u['$rsg-section-heading-1-color'] || v['$rsg-color-base'];
  v['$rsg-section-heading-2-color'] = u['$rsg-section-heading-2-color'] || v['$rsg-gray'];
  // code
  v['$rsg-code-font-family'] = u['$rsg-code-font-family'] || v['$rsg-font-family-highlight'];
  v['$rsg-code-font-size'] = u['$rsg-code-font-size'] || 'inherit';
  v['$rsg-code-word-wrap'] = u['$rsg-code-word-wrap'] || 'break-word';
  v['$rsg-code-padding'] = u['$rsg-code-padding'] || '0';
  v['$rsg-code-color'] = u['$rsg-code-color'] || v['$rsg-color-primary'];
  v['$rsg-code-background'] = u['$rsg-code-background'] || 'transparent';
  v['$rsg-code-white-space'] = u['$rsg-code-white-space'] || 'inherit';
  v['$rsg-code-highlight-font-family'] = u['$rsg-code-highlight-font-family'] || v['$rsg-code-font-family'];
  v['$rsg-code-highlight-font-size'] = u['$rsg-code-highlight-font-size'] || v['$rsg-code-font-size'];
  v['$rsg-code-highlight-word-wrap'] = u['$rsg-code-highlight-word-wrap'] || v['$rsg-code-word-wrap'];
  v['$rsg-code-highlight-padding'] = u['$rsg-code-highlight-padding'] || v['$rsg-code-padding'];
  v['$rsg-code-highlight-color'] = u['$rsg-code-highlight-color'] || 'inherit';
  v['$rsg-code-highlight-background'] = u['$rsg-code-highlight-background'] || v['$rsg-code-background'];
  v['$rsg-code-highlight-white-space'] = u['$rsg-code-highlight-white-space'] || v['$rsg-code-white-space'];
  // menu
  // - sidebar
  v['$rsg-sidebar-linear-gradient'] = u['$rsg-sidebar-linear-gradient'] || v['$rsg-color-sidebar-background'];
  v['$rsg-sidebar-box-shadow'] = u['$rsg-sidebar-box-shadow'] || {
    xs: 'none',
    sm: '1px 0px 5px 2px rgba(0,0,0,.15)',
  };
  v['$rsg-sidebar-logo-padding'] = u['$rsg-sidebar-logo-padding'] || '30px 20px 0 20px';
  v['$rsg-sidebar-logo-align'] = u['$rsg-sidebar-logo-align'] || 'center';
  v['$rsg-sidebar-title-line-height'] = u['$rsg-sidebar-logo-title-line-height'] || '1';
  v['$rsg-sidebar-title-word-wrap'] = u['$rsg-sidebar-logo-title-word-wrap'] || 'break-word';
  v['$rsg-sidebar-logo-svg-height'] = u['$rsg-sidebar-logo-svg-height'] || '35px';
  v['$rsg-sidebar-logo-svg-margin'] = u['$rsg-sidebar-logo-svg-margin'] || '0 0 0 -8px';
  // - table of content
  v['$rsg-toc-collapse-button-delay'] = u['$rsg-toc-collapse-button-delay'] || '500';
  v['$rsg-toc-collapse-button-cursor'] = u['$rsg-toc-collapse-button-cursor'] || 'pointer';
  v['$rsg-toc-collapse-button-color'] = u['$rsg-toc-collapse-button-color'] || v['$rsg-gray'];
  v['$rsg-toc-collapse-button-background'] = u['$rsg-toc-collapse-button-background'] || '#f4e2e1';
  v['$rsg-toc-collapse-button-width'] = u['$rsg-toc-collapse-button-width'] || '100%';
  v['$rsg-toc-collapse-button-height'] = u['$rsg-toc-collapse-button-height'] || '45px';
  v['$rsg-toc-collapse-button-border-radius'] = u['$rsg-toc-collapse-button-border-radius'] || '0';
  v['$rsg-toc-collapse-button-active-box-shadow'] = u['$rsg-toc-collapse-button-active-box-shadow'] || 'none';
  v['$rsg-toc-collapse-button-content-text-align'] = u['$rsg-toc-collapse-button-content-text-align'] || 'right';
  v['$rsg-toc-collapse-button-content-icon-padding'] = u['$rsg-toc-collapse-button-content-icon-padding'] || '0 0 0 10px';
  v['$rsg-toc-collapse-button-content-icon-transition'] = u['$rsg-toc-collapse-button-content-icon-transition'] || 'transform 1s';
  v['$rsg-toc-collapse-button-content-icon-transform'] = u['$rsg-toc-collapse-button-content-icon-transform'] || 'translateY(2px) rotateX(180deg)';

  // - table of content renderer
  v['$rsg-toc-display'] = u['$rsg-toc-display'] || 'block';
  v['$rsg-toc-padding'] = u['$rsg-toc-padding'] || '0';
  v['$rsg-toc-background'] = u['$rsg-toc-background'] || v['$rsg-color-base-background'];
  v['$rsg-toc-text-align'] = u['$rsg-toc-text-align'] || 'left';
  v['$rsg-toc-form-background'] = u['$rsg-toc-form-background'] || v['$rsg-color-primary'];
  v['$rsg-toc-form-padding'] = u['$rsg-toc-form-padding'] || '20px 14px';
  v['$rsg-toc-form-width'] = u['$rsg-toc-form-width'] || '100%';
  v['$rsg-toc-form-margin'] = u['$rsg-toc-form-margin'] || '0 auto';
  // - component-list
  v['$rsg-component-list-color'] = u['$rsg-component-list-color'] || v['$rsg-color-primary'];
  v['$rsg-component-list-font-size'] = u['$rsg-component-list-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-component-list-line-height'] = u['$rsg-component-list-line-height'] || '2.5';
  v['$rsg-component-list-heading-button-outline'] = u['$rsg-component-list-heading-button-outline'] || '0';
  v['$rsg-component-list-heading-button-border'] = u['$rsg-component-list-heading-button-border'] || 'none';
  v['$rsg-component-list-heading-button-cursor'] = u['$rsg-component-list-heading-button-cursor'] || 'pointer';
  v['$rsg-component-list-heading-margin'] = u['$rsg-component-list-heading-margin'] || '0';
  v['$rsg-component-list-heading-border-bottom'] = u['$rsg-component-list-heading-border-bottom'] || 'none';
  v['$rsg-component-list-heading-color'] = u['$rsg-component-list-heading-color'] || v['$rsg-color-base'];
  v['$rsg-component-list-heading-hover-color'] = u['$rsg-component-list-heading-hover-color'] || v['$rsg-color-primary'];
  v['$rsg-component-list-heading-font-size'] = u['$rsg-component-list-heading-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-component-list-icon-margin'] = u['$rsg-component-list-icon-margin'] || '0 15px 0 0';
  v['$rsg-component-list-icon-color'] = u['$rsg-component-list-icon-color'] || v['$rsg-component-list-heading-color'];
  v['$rsg-component-list-icon-transition'] = u['$rsg-component-list-icon-transition'] || 'transform 1s';
  v['$rsg-component-list-icon-transform'] = u['$rsg-component-list-icon-transform'] || 'rotateX(180deg)';
  // table
  v['$rsg-table-border'] = u['$rsg-table-border'] || 'none';
  v['$rsg-table-layout'] = u['$rsg-table-layout'] || {
    xs: 'fixed',
    md: 'fixed',
    xxl: 'auto',
  };
  v['$rsg-table-width'] = u['$rsg-table-width'] || {
    xs: '100%',
    md: 'fixed',
    xxl: '1000px',
  };
  v['$rsg-table-th-width'] = u['$rsg-table-th-width'] || {
    xs: '21.6666666667%;',
    md: '18.3333333333%',
    xxl: '81.48148148px',
  };
  v['$rsg-table-th-last-width'] = u['$rsg-table-th-last-width'] || {
    xs: '35%',
    md: '45%',
    xxl: '200px',
  };
  v['$rsg-table-td-width'] = u['$rsg-table-td-width'] || {
    xs: '21.6666666667%',
    md: '18.3333333333%',
    xxl: '81.48148148px',
  };
  v['$rsg-table-td-last-width'] = u['$rsg-table-td-last-width'] || {
    xs: '35%',
    md: '45%',
    xxl: '200px',
  };
  v['$rsg-table-cell-heading-vertical-align'] = u['$rsg-table-cell-heading-vertical-align'] || 'text-top';
  v['$rsg-table-cell-heading-first-child-white-space'] = u['$rsg-table-cell-heading-first-child-white-space'] || 'pre-wrap';
  v['$rsg-table-cell-heading-font-size'] = u['$rsg-table-cell-heading-font-size'] || {
    xs: v['$rsg-font-size'].xs,
    sm: '15px',
  };
  v['$rsg-table-cell-padding'] = u['$rsg-table-cell-padding'] || '5px 5px 7px 0';
  v['$rsg-table-cell-font-size'] = u['$rsg-table-cell-font-size'] || {
    xs: v['$rsg-font-size'].xs,
    sm: '15px',
  };
  v['$rsg-table-cell-span-font-size'] = u['$rsg-table-cell-span-font-size'] || {
    xs: '12px',
    sm: '15px',
  };
  v['$rsg-table-overflow'] = u['$rsg-table-overflow'] || 'auto';
  v['$rsg-table-border-collapse'] = u['$rsg-table-border-collapse'] || 'collapse';
  v['$rsg-table-margin'] = u['$rsg-table-margin'] || `${v['$rsg-space'].md} 0 0 0`;
  v['$rsg-table-head-border-bottom'] = u['$rsg-table-head-border-bottom'] || '1px #e8e8e8 solid';
  v['$rsg-table-cell-heading-color'] = u['$rsg-table-cell-heading-color'] || v['$rsg-color-base'];
  v['$rsg-table-cell-heading-padding'] = u['$rsg-table-cell-heading-padding'] || `0 ${v['$rsg-space'].md} ${v['$rsg-space'].xxs} 0`;
  v['$rsg-table-cell-heading-text-align'] = u['$rsg-table-cell-heading-text-align'] || 'left';
  v['$rsg-table-cell-heading-font-family'] = u['$rsg-table-cell-heading-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-table-cell-heading-font-weight'] = u['$rsg-table-cell-heading-font-weight'] || 'bold';
  v['$rsg-table-cell-heading-white-space'] = u['$rsg-table-cell-heading-white-space'] || 'nowrap';
  v['$rsg-table-cell-border-top'] = u['$rsg-table-cell-border-top'] || '0';
  v['$rsg-table-cell-color'] = u['$rsg-table-cell-color'] || v['$rsg-color-base'];
  v['$rsg-table-cell-vertical-align'] = u['$rsg-table-cell-vertical-align'] || 'top';
  v['$rsg-table-cell-font-family'] = u['$rsg-table-cell-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-table-cell-child-isolation'] = u['$rsg-table-cell-child-isolation'] || 'false';
  v['$rsg-table-cell-child-p-isolation'] = u['$rsg-table-cell-child-p-isolation'] || 'false';
  v['$rsg-table-cell-child-p-margin'] = u['$rsg-table-cell-child-p-margin'] || '0 0 0 0';
  // markdown

  v['$rsg-markdown-block-quote-color'] = u['$rsg-markdown-block-quote-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-block-quote-font-family'] = u['$rsg-markdown-block-quote-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-block-quote-line-height'] = u['$rsg-markdown-block-quote-line-height'] || '1.5';
  // New variables for markdown blockquote.
  v['$rsg-markdown-block-quote-border-width'] = u['$rsg-markdown-block-quote-border-width'] || '1px';
  v['$rsg-markdown-block-quote-border-left-width'] = u['$rsg-markdown-block-quote-border-left-width'] || '4px';
  v['$rsg-markdown-block-quote-radius'] = u['$rsg-markdown-block-quote-radius'] || '5px';

  // The following variables are part of the rsg original library source. They are overriding bs variables which we do not want, so they are commented in favor of BS variables.
  // v['$rsg-markdown-block-quote-margin'] = u['$rsg-markdown-block-quote-margin'] || `${v['$rsg-space'].md} ${v['$rsg-space'].md}`;
  // v['$rsg-markdown-block-quote-padding'] = u['$rsg-markdown-block-quote-padding'] || '0';
  // v['$rsg-markdown-block-quote-font-size'] = u['$rsg-markdown-block-quote-font-size'] || v['$rsg-font-size'].md;

  v['$rsg-markdown-pre-font-family'] = u['$rsg-markdown-pre-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-pre-font-size'] = u['$rsg-markdown-pre-font-size'] || v['$rsg-font-size'].sm;
  v['$rsg-markdown-pre-line-height'] = u['$rsg-markdown-pre-line-height'] || '1.5';
  v['$rsg-markdown-pre-color'] = u['$rsg-markdown-pre-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-pre-white-space'] = u['$rsg-markdown-pre-white-space'] || 'pre';
  v['$rsg-markdown-pre-background-color'] = u['$rsg-markdown-pre-background-color'] || v['$rsg-color-code-background'];
  v['$rsg-markdown-pre-padding'] = u['$rsg-markdown-pre-padding'] || `${v['$rsg-space'].xs} ${v['$rsg-space'].md}`;
  v['$rsg-markdown-pre-border'] = u['$rsg-markdown-pre-border'] || '1px #e8e8e8 solid';
  v['$rsg-markdown-pre-border-radius'] = u['$rsg-markdown-pre-border-radius'] || v['$rsg-border-radius'];
  v['$rsg-markdown-pre-margin'] = u['$rsg-markdown-pre-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-markdown-list-margin'] = u['$rsg-markdown-list-margin'] || `0 0 ${v['$rsg-space'].md} 0`;
  v['$rsg-markdown-list-padding'] = u['$rsg-markdown-list-padding'] || `0 0 0 ${v['$rsg-space'].md}`;
  v['$rsg-markdown-list-font-size'] = u['$rsg-markdown-list-font-size'] || 'inherit';
  v['$rsg-markdown-list-ordered-style-type'] = u['$rsg-markdown-list-ordered-style-type'] || 'decimal';
  v['$rsg-markdown-list-li-color'] = u['$rsg-markdown-list-li-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-list-li-font-family'] = u['$rsg-markdown-list-li-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-list-li-font-size'] = u['$rsg-markdown-list-li-font-size'] || 'inherit';
  v['$rsg-markdown-list-li-line-height'] = u['$rsg-markdown-list-li-line-height'] || '1.5';
  v['$rsg-markdown-list-li-style-type'] = u['$rsg-markdown-list-li-style-type'] || 'inherit';
  v['$rsg-markdown-table-margin'] = u['$rsg-markdown-table-margin'] || `0 0 ${v['$rsg-space'].xs} 0`;
  v['$rsg-markdown-table-border-collapse'] = u['$rsg-markdown-table-border-collapse'] || 'collapse';
  v['$rsg-markdown-table-cell-padding'] = u['$rsg-markdown-table-cell-padding'] || `${v['$rsg-space'].xxs} ${v['$rsg-space'].md} ${v['$rsg-space'].xxs} 0`;
  v['$rsg-markdown-table-cell-font-family'] = u['$rsg-markdown-table-cell-font-family'] || v['$rsg-font-family-base'];
  v['$rsg-markdown-table-cell-font-size'] = u['$rsg-markdown-table-cell-font-size'] || v['$rsg-font-size'].md;
  v['$rsg-markdown-table-cell-color'] = u['$rsg-markdown-table-cell-color'] || v['$rsg-color-base'];
  v['$rsg-markdown-table-cell-line-height'] = u['$rsg-markdown-table-cell-line-height'] || '1.5';
  v['$rsg-markdown-table-cell-head-font-weight'] = u['$rsg-markdown-table-cell-head-font-weight'] || 'bold';
  v['$rsg-markdown-table-head-border-bottom'] = u['$rsg-markdown-table-head-border-bottom'] || `1 ${v['$rsg-gray-light']} solid`;
  // welcome
  v['$rsg-welcome-max-width'] = u['$rsg-welcome-max-width'] || '1000';
  v['$rsg-welcome-margin'] = u['$rsg-welcome-margin'] || '0 auto';
  v['$rsg-welcome-padding'] = u['$rsg-welcome-padding'] || v['$rsg-space'].md;
  // Version
  v['$rsg-version-color'] = u['$rsg-version-color'] || v['$rsg-white'];
  v['$rsg-version-margin'] = u['$rsg-version-margin'] || '0';
  v['$rsg-version-font-family'] = u['$rsg-version-font-family'] || 'inherit';
  v['$rsg-version-font-size'] = u['$rsg-version-font-size'] || v['$rsg-font-size'].md;
  newTheme.styleguide = v;
  return { ...userTheme, ...newTheme };
}
/* eslint-enable dot-notation */
export default makeTheme();
