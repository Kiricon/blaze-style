const path = require('path');
module.exports = {
    devtool: "inline-source-map",
    resolve: {
        modules: [
            path.resolve('./node_modules'),
            path.resolve('./src')
          ],
    },
    module: {
      rules: [
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
            }]
        }
      ]
    },
    devServer: {
        historyApiFallback: true
    },
  };