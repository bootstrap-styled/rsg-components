Some components use icons from font-awesome. For this to work, you will need to configure in webpack
the following loader rules: 

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
