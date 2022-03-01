const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanCSSPlugin = require('less-plugin-clean-css');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env, argv) {
    let plugins = [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ];

    if (argv.mode !== 'production') {
        plugins.push(new webpack.EvalSourceMapDevToolPlugin({
            test: /\.(mjs|js|jsx|ts|tsx)$/,
        }));
    }

    plugins.push(new HtmlWebpackPlugin({
        template: './src/index.html',
    }));

    let options = {
        entry: './src/index.jsx',
        output: {
            path: path.join(__dirname, "dist"),
            filename: '[name].js',
        },
        mode: argv.mode,
        devtool: 'source-map',
        externals: {
            'jquery': 'jQuery',
            'react': 'React',
            'react-dom': 'ReactDOM',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.css', '.less'],
        },
        plugins: plugins,
        module: {
            rules: [
                {
                    test: /\.(mjs|jsx)$/,
                    exclude: /node_modules/,
                    resolve: {
                        fullySpecified: false,
                    },
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ],
                            babelrc: false
                        }
                    }
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            context: path.resolve(__dirname, './'),
                            configFile: 'tsconfig.json',
                            onlyCompileBundledFiles: true
                        }
                    }
                },
                {
                    test: /\.(css|less)$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                url: false,
                                modules: {
                                    localIdentName: (argv.mode !== 'production' ? '[local]--[hash:base64:6]' : '[hash:base64:6]'),
                                    localIdentHashSalt: '[name]'
                                }
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true,
                                lessOptions: (loaderContext) => {
                                    return {
                                        rewriteUrls: 'all',
                                        rootpath: path.dirname(loaderContext.resourcePath).replace(__dirname, ''),
                                        plugins: [
                                            new CleanCSSPlugin(),
                                        ]
                                    };
                                },
                            },
                        },
                    ],
                },
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                }),
            ],
        },
    };

    if (argv.mode == 'production') {
        options.target = 'es5';
        options.output.chunkFormat = 'array-push';
        options.output.clean = true;
    }

    return options;
}
