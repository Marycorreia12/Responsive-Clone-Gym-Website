const path = require('path');
module.exports = {
    mode:"development",
    entry: './js/app.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
            "style-loader", //3.Injects styles into Dom
            "css-loader",  //2.Translates CSS into CommonJS
            "sass-loader"], //1.Compiles Sass to CSS
          },
        ],
      },
  };