import { sass } from '@stencil/sass';

export const config = {
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
