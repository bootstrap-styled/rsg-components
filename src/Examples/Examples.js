import React from 'react';
import PropTypes from 'prop-types';
import Playground from 'react-styleguidist/lib/client/rsg-components/Playground';
import Markdown from 'react-styleguidist/lib/client/rsg-components/Markdown';
import ExamplesRenderer from './ExamplesRenderer';

export default function Examples({ examples, name, exampleMode }, { codeRevision }) {
  return (
    <ExamplesRenderer name={name}>
      {examples.map((example, index) => {
        switch (example.type) {
          case 'code':
            return (
              <Playground
                code={example.content}
                evalInContext={example.evalInContext}
                key={`${codeRevision}/${index}`} // eslint-disable-line react/no-array-index-key
                name={name}
                index={index}
                settings={example.settings}
                exampleMode={exampleMode}
              />
            );
          case 'markdown':
            return <Markdown text={example.content} key={index}/>; // eslint-disable-line react/no-array-index-key
          default:
            return null;
        }
      })}
    </ExamplesRenderer>
  );
}
Examples.propTypes = {
  examples: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  exampleMode: PropTypes.string.isRequired,
};
Examples.contextTypes = {
  codeRevision: PropTypes.number.isRequired,
};
