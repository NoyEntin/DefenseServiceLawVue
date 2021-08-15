module.exports = {
    publicPath: '',

    pages: {
        index: {
            // entry for the page
            entry: 'src/index/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // when using the entry-only string format,
        // template is inferred to be `public/subpage.html`
        // and falls back to `public/index.html` if not found.
        // Output filename is inferred to be `subpage.html`.
        theLaw: {
            // entry for the page
            entry: 'src/subpages/theLaw/main.js',
            // the source template
            template: 'public/theLaw.html',
            // output as dist/index.html
            filename: 'theLaw.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'The Law',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'theLaw']
        },
        dateCalculator: {
            // entry for the page
            entry: 'src/subpages/dateCalculator/main.js',
            // the source template
            template: 'public/dateCalculator.html',
            // output as dist/index.html
            filename: 'dateCalculator.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Date Calculator',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'dateCalculator']
        },
    },

    transpileDependencies: [
        'vue-echarts',
        'resize-detector',
        'muse-ui'
    ]
}
