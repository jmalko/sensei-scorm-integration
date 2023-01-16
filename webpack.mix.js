// webpack.mix.js

let mix = require('laravel-mix');

mix.sass('src/sass.app.scss', 'dist')
    .js('src/js/app.js', 'dist')
    .setPublicPath('dist');
