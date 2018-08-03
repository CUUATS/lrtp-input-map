const sass = require('@stencil/sass');

exports.config = {
  namespace: 'lrtp',
  copy: [
    {
      src: 'public',
      dest: 'voices/public'
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
  watch: true,
  globalScript: 'src/global/lrtp.ts',
  globalStyle: 'src/global/lrtp.css'
};
