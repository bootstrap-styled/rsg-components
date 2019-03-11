import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Examples from 'react-styleguidist/lib/client/rsg-components/Examples';
import SectionHeading from 'react-styleguidist/lib/client/rsg-components/SectionHeading';
import JsDoc from 'react-styleguidist/lib/client/rsg-components/JsDoc';
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown';
import Slot from 'react-styleguidist/lib/client/rsg-components/Slot';
import { DisplayModes, UsageModes } from 'react-styleguidist/lib/client/consts';
import ReactComponentRenderer from './ReactComponentRenderer';
import { DOCS_TAB_USAGE } from '../slots';

const ExamplePlaceholder =
  process.env.STYLEGUIDIST_ENV !== 'production'
    ? require('rsg-components/ExamplePlaceholder').default
    : () => <div/>;

export default class ReactComponent extends Component {
  static propTypes = {
    component: PropTypes.object.isRequired,
    depth: PropTypes.number.isRequired,
    exampleMode: PropTypes.string.isRequired,
    usageMode: PropTypes.string.isRequired,
  };
  static contextTypes = {
    config: PropTypes.object.isRequired,
    displayMode: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
    const { usageMode } = props;

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      activeTab: usageMode === UsageModes.expand ? DOCS_TAB_USAGE : undefined,
    };
  }

  handleTabChange(name) {
    this.setState((state) => ({
      activeTab: state.activeTab !== name ? name : undefined,
    }));
  }

  render() {
    const { activeTab } = this.state;
    const {
      displayMode,
      config: { pagePerSection },
    } = this.context;
    const { component, depth, usageMode, exampleMode } = this.props;
    const { name, visibleName, slug, filepath, pathLine } = component;
    const { description, examples = [], tags = {} } = component.props;
    if (!name) {
      return null;
    }
    const showUsage = usageMode !== UsageModes.hide;

    return (
      <ReactComponentRenderer
        name={name}
        slug={slug}
        filepath={filepath}
        pathLine={pathLine}
        docs={<JsDoc {...tags} />}
        description={description && <Markdown text={description}/>}
        heading={(
          <SectionHeading
            id={slug}
            pagePerSection={pagePerSection}
            deprecated={!!tags.deprecated}
            slotName="componentToolbar"
            slotProps={{
              ...component,
              isolated: displayMode !== DisplayModes.all,
            }}
            depth={depth}
          >
            {visibleName}
          </SectionHeading>
        )}
        examples={
          examples.length > 0 ? (
            <Examples examples={examples} name={name} exampleMode={exampleMode}/>
          ) : (
            <ExamplePlaceholder name={name}/>
          )
        }
        tabButtons={
          showUsage && (
            <Slot
              name="docsTabButtons"
              active={activeTab}
              props={{ ...component, onClick: this.handleTabChange }}
            />
          )
        }
        tabBody={<Slot name="docsTabs" active={activeTab} onlyActive props={component}/>}
      />
    );
  }
}
