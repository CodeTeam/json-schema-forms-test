/* eslint-disable */

const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'Sberned EVA StyleGuides',
  skipComponentsWithoutExample: true,
  defaultExample: true,
  components() {
    return glob.sync(path.resolve(__dirname, 'src/components/common/**/*.js')).filter(function(module) {
      return /\/[A-Z]\w*\.js$/.test(module);
    });
  },
  serverPort: 5555,
  updateWebpackConfig(webpackConfig) {
    const dir = path.resolve(__dirname, 'src');
    webpackConfig.entry.push(path.join(__dirname, 'src/static/bootstrap.min.css'));
    webpackConfig.module.loaders.push(
      {
        test: /\.json$/,
        include: path.dirname(require.resolve('dog-names/package.json')),
        loader: 'json'
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]',
        include: dir,
      },
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel'
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        loader: 'file?name=images/[hash].[ext]',
        include: path.join(__dirname, 'src/components'),
      },
      {
        test: /\.css$/,
        loader: 'style!css',
        include: dir
      },
      {
        test: /\.styl$/,
        loader: 'style!css?modules&localIdentName=[local]___[hash:base64:10]',
        include: dir,
      },
      {
        test: /\.styl$/,
        loaders: ['postcss', 'stylus'],
        include: dir,
      },
      {
        test: /\.svg$/,
        loader: `svg-sprite?${JSON.stringify({
          name: '[name]_[hash]',
        })}`,
        include: path.join(__dirname, 'src/icons'),
      }
    );
    return webpackConfig;
  },
};
