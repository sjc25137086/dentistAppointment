module.exports = {
    //productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    devServer: {
        port: 8080,
        open: true
            // proxy: {}
    }
}