import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
import '../../loaders/tomorrow.css';
import { Table, TableHead, TableBody, TableRow, TableCell } from './Table';
import MarkdownHeading from './MarkdownHeading';
import List from './List';
import Blockquote from './Blockquote';
import Pre from './Pre';
import Code from '../Code';
import Checkbox from './Checkbox';
import Hr from './Hr';
import Details from './Details/DetailsRenderer';
import DetailsSummary from './Details/DetailsSummaryRenderer';
import Link from '../Link';
import Text from '../Text';
import Para from '../Para';

export const baseOverrides = {
  a: {
    component: Link,
  },
  h1: {
    component: MarkdownHeading,
    props: {
      level: 1,
    },
  },
  h2: {
    component: MarkdownHeading,
    props: {
      level: 2,
    },
  },
  h3: {
    component: MarkdownHeading,
    props: {
      level: 3,
    },
  },
  h4: {
    component: MarkdownHeading,
    props: {
      level: 4,
    },
  },
  h5: {
    component: MarkdownHeading,
    props: {
      level: 5,
    },
  },
  h6: {
    component: MarkdownHeading,
    props: {
      level: 6,
    },
  },
  p: {
    component: Para,
    props: {
      semantic: 'p',
    },
  },
  em: {
    component: Text,
    props: {
      semantic: 'em',
    },
  },
  strong: {
    component: Text,
    props: {
      semantic: 'strong',
    },
  },
  ul: {
    component: List,
  },
  ol: {
    component: List,
    props: {
      ordered: true,
    },
  },
  blockquote: {
    component: Blockquote,
  },
  code: {
    component: Code,
  },
  pre: {
    component: Pre,
  },
  input: {
    component: Checkbox,
  },
  hr: {
    component: Hr,
  },
  table: {
    component: Table,
  },
  thead: {
    component: TableHead,
  },
  th: {
    component: TableCell,
    props: {
      header: true,
    },
  },
  tbody: {
    component: TableBody,
  },
  tr: {
    component: TableRow,
  },
  td: {
    component: TableCell,
  },
  details: {
    component: Details,
  },
  summary: {
    component: DetailsSummary,
  },

};

export const inlineOverrides = {
  ...baseOverrides,
  p: {
    component: Text,
  },
};

function Markdown({ text, inline }) {
  const overrides = inline ? inlineOverrides : baseOverrides;
  return compiler(text, { overrides, forceBlock: true });
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

export default Markdown;
