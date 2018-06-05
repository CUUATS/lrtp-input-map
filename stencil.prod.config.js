const sass = require('@stencil/sass');

exports.config = {
  namespace: 'lrtp',
  copy: [
    {
      src: 'public'
    }
  ],
  outputTargets: [
    {
      type: 'www',
      baseUrl: '/lrtp-input',
      dir: 'deploy',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ]
};