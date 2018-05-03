const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css'
});

const optimizeCssAssets= new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
});

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'aad-sso-wordpress-mercer.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            // use: [{
            //     loader: 'style-loader' // Creates style nodes from JS strings
            // }, {
            //     loader: 'css-loader' // Translates CSS into CommonJS
            // },{
            //     loader: 'resolve-url-loader' // Must precede sass-loader
            // }, {
            //     loader: 'sass-loader' // Compiles Sass to CSS
            // }]
            // use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
            use: extractSass.extract(['css-loader', 'resolve-url-loader', 'sass-loader'])
        }]
    },
    plugins: [
        extractSass,
        optimizeCssAssets
    ]
};
