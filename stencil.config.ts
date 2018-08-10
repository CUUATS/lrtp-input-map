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
      baseUrl: '/voices-mobile',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ],
  globalScript: 'src/global/lrtp.ts',
  globalStyle: 'src/global/lrtp.css'
};
