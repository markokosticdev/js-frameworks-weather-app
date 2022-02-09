const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config, context) => {
  // console.log('context', context)
  // console.log('config', config)

  return {
    ...config,
    resolve: {
      extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx'],
      alias: {
        ...config.resolve.alias,
        'vue': '@vue/runtime-dom'
      }
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules|vue\/src/,
          options: {
            configFile: 'tsconfig.app.json',
            appendTsSuffixTo: [/\.vue$/],
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            },
          },
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          // options: {
          //   name: 'assets/images/[name].[ext]?[hash]'
          // }
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          }
        }, {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          }
        }, {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          }
        }
      ],
    },
    plugins: [
      ...config.plugins,
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: 'src/index.html',
        inject: true
      })
    ],
  };
};
