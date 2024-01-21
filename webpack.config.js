module.exports = {
    module: {
        rules: [
            { test: /\.jpeg$/, type: 'asset/resource' },
            { test: /\.jpg$/, type: 'asset/resource' },
            { test: /\.webp$/, type: 'asset/resource' },
            { test: /\.svg$/, type: 'asset/resource' },
            { test: /\.mp4$/, type: 'asset/resource' },
            { test: /\.woff$/, type: 'asset/resource' }
        ]
    }
};