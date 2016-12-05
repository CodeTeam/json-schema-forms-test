const stylus = require('stylus');

module.exports = {
  generateScopedName: '[path]___[name]__[local]___[hash:base64:5]',
  extensions: ['.styl'],
  preprocessCss(css, filename) {
    return stylus(css)
      .set('filename', filename)
      .render();
  },
};
