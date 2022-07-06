const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/**', {
      target: 'https://maksymz-delivery-app.herokuapp.com:3001',
    })
  );
  app.use(
    createProxyMiddleware('/otherApi/**', {
      target: 'https://maksymz-delivery-app.herokuapp.com:3001',
    })
  );
};
