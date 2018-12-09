You need to use [webpack alias](https://webpack.js.org/configuration/resolve/#resolve-alias) to override the original rsg components.

As stated in [react-styleguidist documentation](https://react-styleguidist.js.org/docs/configuration.html#styleguidecomponents), you can use `StyleGuideRenderer`

to mount the layout, and `Wrapper` to mount the test wrapper component.

In your `styleguide.config.js` it would look like:

```bash
styleguideComponents: {
  // API
  StyleGuideRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/StyleGuide/StyleGuideRenderer.js'),
  Wrapper: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Wrapper/Wrapper.js'),
  // rsg-components
  ArgumentRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Argument/ArgumentRenderer.js'),
  ArgumentsRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Arguments/ArgumentsRenderer.js'),
  CodeRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Code/CodeRenderer.js'),
  ComponentsRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Components/ComponentsRenderer.js'),
  ComponentsList: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/ComponentsList/ComponentsList.js'),
  ComponentsListRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/ComponentsList/ComponentsListRenderer.js'),
  Editor: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Editor/Editor.js'),
  EditorLoaderRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Editor/EditorLoaderRenderer.js'),
  ErrorRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Error/ErrorRenderer.js'),
  ExamplePlaceholderRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/ExamplePlaceholder/ExamplePlaceholderRenderer.js'),
  ExamplesRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Examples/ExamplesRenderer.js'),
  HeadingRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Heading/HeadingRenderer.js'),
  LinkRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Link/LinkRenderer.js'),
  LogoRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Logo/LogoRenderer.js'),
  Markdown: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown'),
  Blockquote: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Blockquote'),
  BlockquoteRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Blockquote/BlockquoteRenderer.js'),
  Checkbox: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Checkbox'),
  CheckboxRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Checkbox/CheckboxRenderer.js'),
  Hr: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Hr'),
  HrRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Hr/HrRenderer.js'),
  JsDoc: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/JsDoc'),
  List: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/List'),
  ListRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/List/ListRenderer.js'),
  MarkdownHeading: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/MarkdownHeading'),
  MarkdownHeadingRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/MarkdownHeading/MarkdownHeadingRenderer.js'),
  Pre: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Pre'),
  PreRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Pre/PreRenderer.js'),
  TableHeadRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Table/TableHeadRenderer.js'),
  TableBodyRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Table/TableBodyRenderer.js'),
  TableRowRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Table/TableRowRenderer.js'),
  TableCellRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Markdown/Table/TableCellRenderer.js'),
  MessageRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Message/MessageRenderer.js'),
  MethodsRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Methods/MethodsRenderer.js'),
  NameRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Name/NameRenderer.js'),
  ParaRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Para/ParaRenderer.js'),
  PathlineRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Pathline/PathlineRenderer.js'),
  PlaygroundRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Playground/PlaygroundRenderer.js'),
  PlaygroundErrorRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/PlaygroundError/PlaygroundErrorRenderer.js'),
  ReactComponentRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/ReactComponent/ReactComponentRenderer.js'),
  RibbonRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Ribbon/RibbonRenderer.js'),
  SectionRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Section/SectionRenderer.js'),
  SectionHeadingRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/SectionHeading/SectionHeadingRenderer.js'),
  SectionsRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Sections/SectionsRenderer.js'),
  slots: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/slots'),
  TabButtonRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/TabButton/TabButtonRenderer.js'),
  TableRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Table/TableRenderer.js'),
  TableOfContents: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/TableOfContents/TableOfContents'),
  TableOfContentsRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/TableOfContents/TableOfContentsRenderer.js'),
  TextRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Text/TextRenderer.js'),
  ToolbarButtonRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/ToolbarButton/ToolbarButtonRenderer.js'),
  TypeRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Type/TypeRenderer.js'),
  Usage: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Usage/Usage.js'),
  VersionRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Version/VersionRenderer.js'),
  WelcomeRenderer: path.join(__dirname, 'node_modules/@bootstrap-styled/rsg-components/lib/Welcome/WelcomeRenderer.js'),
},
```

Some components needs font-awesome icons. For this to work, you must configure in your webpack loaders the following rules: 

```js static
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
},
{
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'url-loader?limit=10000&mimetype=application/font-woff',
},
{
  test: /\.(ttf|otf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
  include: /node_modules/,
  use: [{
    loader: 'file-loader',
    options: {
      outputPath: 'fonts',
      publicPath: 'fonts',
    },
  }],
}
```