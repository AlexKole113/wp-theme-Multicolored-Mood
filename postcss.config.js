module.exports = {
    plugins: [
        require('postcss-mixins'),
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-preset-env'),
        require('postcss-import'),
        require('postcss-simple-vars'),
    ],
};
