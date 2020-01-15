// const path = require('path');
// const fs = require('fs');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const isDevelopment = !process.env.production;
// const isProduction = process.env.production;
// const distPath = path.join(__dirname, '/public');

// const extractSass = new ExtractTextPlugin({
//   filename: 'main.css',
//   disable: isDevelopment
// });

// const config = {
//   entry: {
//     app: './src/index.js'//app: './src/js/app.js'
//   },
//   output: {
//     filename: 'bundle.js',
//     path: distPath
//   },
//   module: {
//     rules: [{
//       test: /\.js$/,
//       exclude: [/node_modules/],
//       use: [{
//         loader: 'babel-loader',
//         options: {
//           presets: ['env', 'react']
//         }
//       }]
//     }, {
//       test: /\.scss$/,
//       exclude: [/node_modules/],
//       use: extractSass.extract({
//         fallback: 'style-loader',
//         use: [{
//           loader: 'css-loader',
//           options: {
//             modules: true,
//             sourceMap: true,
//             importLoaders: 2,
//             localIdentName: '[name]__[local]__[hash:base64:5]', // className template
//             minimize: isProduction
//           }
//         },
//           'sass-loader',
//           'resolve-url-loader'
//         ]
//       })
//     }, {
//       test: /\.(gif|png|jpe?g|svg)$/i,
//       use: [{
//         loader: 'file-loader',
//         options: {
//           name: 'src/images/[name][hash].[ext]'
//         }
//       }, {
//         loader: 'image-webpack-loader',
//         options: {
//           mozjpeg: {
//             progressive: true,
//             quality: 70
//           }
//         }
//       },
//       ],
//     }, {
//       test: /\.(eot|svg|ttf|woff|woff2)$/,
//       use: {
//         loader: 'file-loader',
//         options: {
//           name: 'fonts/[name][hash].[ext]'
//         }
//       },
//     }]
//   },





//   plugins: [
//         new MiniCssExtractPlugin({
//             filename: "style.css"
//         }),
//         new HtmlWebpackPlugin({
//             template: "./src/index.html"
//         })
//     ],





//   // devServer: {

    //historyApiFallback: true,     !!!!

//   //   contentBase: distPath,
//   //   compress: true,
//   //   open: true,
//   //   port: 9000
//   // }
// };

// // if (isDevelopment) {
// //   fs.readdirSync(distPath)
// //     .map((fileName) => {
// //       if (['.css', '.js'].includes(path.extname(fileName))) {
// //         return fs.unlinkSync(`${distPath}/${fileName}`);
// //       }

// //       return '';
// //     });
// // }

// if (isProduction) {
//   config.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_console: true,
//         unsafe: true
//       }
//     })
//   );
// }

// module.exports = config;


























const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');


const isDevelopment = !process.env.production;
const isProduction = process.env.production;

const distPath = path.join(__dirname, '/public');

module.exports = {
    entry: "./src/index.js",

    output: {
         path: path.join(__dirname, "/build"),
        //path: __dirname + '/build',
        filename: "index-bundle.js"
        //publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },


            // {
            //     test: /\.json$/i,
            //     exclude: /node_modules/,
            //     use: 'raw-loader',
            // },

            // {
            //  test: /\.json$/,
            //  loader: 'file-loader',
            //  type: 'javascript/auto'
            // },










//
 // loaders: [
 //      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
 //    ],
//












(async () => {
  const files = await imagemin(['./src/img/*.{jpg,png}'], {
    destination: 'build/img',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  //console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})(),

(async () => {
  const files = await imagemin(['./src/img/kat/*.{jpg,png}'], {
    destination: 'build/img/kat',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  //console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})(),

(async () => {
  const files = await imagemin(['./src/img/articles/*.{jpg,png}'], {
    destination: 'build/img/articles',
    plugins: [
      imageminJpegtran(),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  //console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})(),










// {
//       test: /\.(gif|png|jpe?g|svg)$/i,
//       use: [{
//         loader: 'file-loader',
//         options: {
//           name: 'src/img/[name][hash].[ext]'
//         }
//       }, {
//         loader: 'image-webpack-loader',
//         options: {
//           mozjpeg: {
//             progressive: true,
//             quality: 70
//           }
//         }
//       },
//       ],
//     }, 
{
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name][hash].[ext]'
        }
      },
    }





        ]
    },



devServer: {
    historyApiFallback: true
    //historyApiFallback: { index: '/' },
    //contentBase: __dirname + "/build/",

//contentBase: distPath
//compress: true,
//open: true

  },







 









    
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            //template: resolve(__dirname, '../build', 'index.html'),
            fileName: 'index.html'
            
        })

    ]
};



// if (isDevelopment) {
//   fs.readdirSync(distPath)
//     .map((fileName) => {
//       if (['.css', '.js'].includes(path.extname(fileName))) {
//         return fs.unlinkSync(`${distPath}/${fileName}`);
//       }

//       return '';
//     });
// }

// if (isProduction) {
//   config.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         drop_console: true,
//         unsafe: true
//       }
//     })
//   );




