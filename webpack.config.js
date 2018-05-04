const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'aad-sso-wordpress-mercer.css'
});

const optimizeCssAssets = new OptimizeCssAssetsPlugin();

const copyFiles = new CopyWebpackPlugin([
    'src/php/aad-sso-wordpress-mercer.php'
]);

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
            use: extractSass.extract(['css-loader', 'resolve-url-loader', 'sass-loader'])
        }, {
            test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
        }]
    },
    plugins: [
        extractSass,
        optimizeCssAssets,
        copyFiles
    ]
};
