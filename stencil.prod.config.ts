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
      baseUrl: '/voices',
      dir: 'deploy',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ],
  globalScript: 'src/global/lrtp.ts',
  globalStyle: 'src/global/lrtp.css'
};
