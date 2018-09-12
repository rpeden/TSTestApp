const path = require('path');

module.exports = {
  entry: './TS/main.js',
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    filename: 'bundle.js'
  }
};