/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@cuuats/webmapgl';
import '@ionic/core';
import 'ionicons';


declare global {

  namespace StencilComponents {
    interface LrtpApp {
      'schemaUrl': string;
      'styleUrl': string;
      'token': string;
    }
  }

  interface HTMLLrtpAppElement extends StencilComponents.LrtpApp, HTMLStencilElement {}

  var HTMLLrtpAppElement: {
    prototype: HTMLLrtpAppElement;
    new (): HTMLLrtpAppElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-app': HTMLLrtpAppElement;
  }
  interface ElementTagNameMap {
    'lrtp-app': HTMLLrtpAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-app': JSXElements.LrtpAppAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpAppAttributes extends HTMLAttributes {
      'schemaUrl'?: string;
      'styleUrl'?: string;
      'token'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
