const { version } = require('./package.json');

process.env.VUE_APP_VERSION = version || '0.0.0';

module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    configureWebpack: {
        devtool: 'source-map'
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/scss/_variables.scss";
                `
            }
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    vue: {
        loaders: {
            scss: 'style!css!sass'
        }
    },
};
