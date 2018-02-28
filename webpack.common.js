const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Entry = require('webpack-glob-entry');
const ImageWebpackLoader = require('image-webpack-loader');

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"// css files output
});

module.exports = {
    // entry: {
    //     main: "./src/pages/main/main.js",
    //     contact: "./src/pages/contact/contact.js",
    //     services: "./src/pages/services/services.js",
    //     // childPage: "./src/pages/childPage/childPage.js"
    //     // blog: "./blog.js"
    // },
    entry: Entry('./assets/js/**/**.js'),//Dynamically make entry point for all files in this glob
    output: {
        filename: '[name].js',//output file format for js files
        path: path.resolve(__dirname, '_generated/assets/js/dist')
    },
    resolve: {
        modules: ['common', 'js/modules', 'node_modules']//Allow import of files in these folder names
    },
    target: 'web',
    module: {
        rules:
        [
            // {
            //     test: /\.scss$/,
            //     use: extractSass.extract({
            //         use:
            //         [
            //             {
            //                 loader: "css-loader",
            //                 options: {
            //                     sourceMap: true
            //                 }
            //             },
            //             {
            //                 loader: 'postcss-loader',
            //                 options: {
            //                     sourceMap: true,
            //                     plugins: [
            //                         require('autoprefixer')(),
            //                         require('cssnano')({
            //                             discardUnused: {
            //                                 fontFace: false
            //                             }
            //                         })
            //                     ]
            //                 }
            //             },
            //             {
            //                 loader: "sass-loader",
            //                 options: {
            //                     sourceMap: true,
            //                     data: '@import "~core/core.scss";'//get core into all scss files
            //                 }
            //             }
            //         ]
            //     })
            // },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [{
                  loader: 'file-loader',
                  options: {
                    loader: 'image-webpack-loader',
                    context: path.resolve(__dirname, "src"),
                    name: 'assets/img/[name]_[hash].[ext]',
                    options: {
                      gifsicle: {
                        interlaced: false,
                      },
                      optipng: {
                        optimizationLevel: 7,
                      },
                      pngquant: {
                        quality: '65-90',
                        speed: 4
                      },
                      mozjpeg: {
                        progressive: true,
                        quality: 60
                      }
                    }
                  }
                }]
            }
            // ,
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [{
            //         loader: 'file-loader',
            //         options: {
            //             name: 'fonts/[name]_[hash].[ext]'
            //         }
            //     }],
            //
            // }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['_generated/assets/js/dist']),
        extractSass,
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     minChunks: 3// Turn this up to include less in common
        // }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
    ],
    stats: {
        children: false//turns off some console logs
    }
};
