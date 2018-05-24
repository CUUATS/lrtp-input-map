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
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ],
  watch: true
};
