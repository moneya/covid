const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .setPublicPath('./public')
    .js('resources/js/dependencies.js', 'js')
    .js('resources/js/app.js', 'js')
    // .sass('resources/sass/theme.scss', 'css')
    .webpackConfig({
        output: {
            chunkFilename: './js/[name].js?id=[chunkhash]',
            publicPath: "/themes/pages/",
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm.js',
                '@': path.resolve('./resources/js'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'sass-loader'
                    ]
                }
            ]
        },
    })
    .version()
