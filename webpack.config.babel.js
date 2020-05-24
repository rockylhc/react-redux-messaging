import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const isDebug =
    process.env.NODE_ENV ===
    'development';

export default {
    mode: process.env.NODE_ENV,
    entry: resolve(
        __dirname,
        'src/index.js',
    ),
    output: {
        path: resolve(
            __dirname,
            'public'
    ),
    filename:  'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader:
                            'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ],
                        },
                    },
                ],
            }
        ],
    },
    optimization: {
        minimize: !isDebug,
        minimizer: [new TerserPlugin()],
    },
    plugins: [],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    devServer: {
        port: 8080,
        contentBase: resolve(
            __dirname,
            'public',
        ),
        compress: true,
        historyApiFallback: true,
        hot: true,
    },
    externals: {
        config: JSON.stringify({
            socketUrl: 'http://localhost:8081',
        })
    }
};
