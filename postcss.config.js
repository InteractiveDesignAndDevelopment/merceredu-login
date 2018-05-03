module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-url')([
            { url: 'inline', custom: { multi: true } },
            { url: 'inline', custom: { multi: true } },
            { url: 'rebase', custom: { multi: true } },
            { url: 'inline', custom: { multi: true } }
        ]),
        require('postcss-crass')()
    ]
};
