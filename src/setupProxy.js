const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {
  app.use(
    createProxyMiddleware('/swap', {
      target: 'https://xv98mjbqk1.execute-api.us-west-2.amazonaws.com/prod/',
      changeOrigin: true,
    })
  );
};  