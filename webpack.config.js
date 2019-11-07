const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

devServer: {
    historyApiFallback: true,
    overlay: true
    },
devtool: "cheap-module-eval-source-map",
watch: true,


  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/js/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development',

  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    //   chunkFilename: "[id].css"
    })
  ],

  // Rules modules for npm
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            // Apply rule for .sass, .scss or .css files
            test: /\.(sa|sc|c)ss$/,
    
            // Set loaders to transform files.
            // Loaders are applying from right to left(!)
            // The first loader will be applied after others
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      path: path.resolve(__dirname, 'dist'),
                      publicPath: 'dist/'
                    }
                },
                {
                    // This loader resolves url() and @imports inside CSS
                    loader: "css-loader", options: { import: true }
                },
                {
                    // Then we apply postCSS fixes like autoprefixer and minifying
                    loader: "postcss-loader"
                },
                {
                    // First we transform SASS to standard CSS
                    loader: "sass-loader",
                    options: {
                        implementation: require("sass")
                    }
                }
            ]
        }
    ]
  }

};