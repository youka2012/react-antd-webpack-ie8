module.exports = {
    debugIE:false,
    devPort:8888,
    proxyConfig: {
        "/api/*": {
            target: "http://localhost:8989",
            secure: false,
            changeOrigin: false,
        },
        "/druid": {
            target: "http://localhost:8989",
            secure: false,
            changeOrigin: false,
        },
    },
    chunkStats:false,
    bundleAnalyzerPlugin:false
};