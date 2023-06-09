const { createProxyMiddleware } = require('http-proxy-middleware');
const baseUrl = process.env.REACT_APP_API_DOMAIN + ":" + process.env.REACT_APP_API_PORT
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: baseUrl,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ""
            }
        })
    );
};
