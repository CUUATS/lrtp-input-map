/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
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

import '@ionic/core';
import 'ionicons';
import '@cuuats/webmapgl';
import '@stencil/router';


declare global {

  namespace StencilComponents {
    interface LrtpAddressSearch {
      'bbox': [number, number, number, number];
      'forwardGeocodeUrl': string;
      'jobId': string;
      'limit': number;
    }
  }

  interface HTMLLrtpAddressSearchElement extends StencilComponents.LrtpAddressSearch, HTMLStencilElement {}

  var HTMLLrtpAddressSearchElement: {
    prototype: HTMLLrtpAddressSearchElement;
    new (): HTMLLrtpAddressSearchElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-address-search': HTMLLrtpAddressSearchElement;
  }
  interface ElementTagNameMap {
    'lrtp-address-search': HTMLLrtpAddressSearchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-address-search': JSXElements.LrtpAddressSearchAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpAddressSearchAttributes extends HTMLAttributes {
      'bbox'?: [number, number, number, number];
      'forwardGeocodeUrl'?: string;
      'jobId'?: string;
      'limit'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpApp {
      'bbox': string;
      'commentUrl': string;
      'defaultLat': number;
      'defaultLon': number;
      'forwardGeocodeUrl': string;
      'planeDefaultLat': number;
      'planeDefaultLon': number;
      'reverseGeocodeUrl': string;
      'schemaUrl': string;
      'styleUrl': string;
      'surveyUrl': string;
      'token': string;
      'trainDefaultLat': number;
      'trainDefaultLon': number;
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
      'bbox'?: string;
      'commentUrl'?: string;
      'defaultLat'?: number;
      'defaultLon'?: number;
      'forwardGeocodeUrl'?: string;
      'planeDefaultLat'?: number;
      'planeDefaultLon'?: number;
      'reverseGeocodeUrl'?: string;
      'schemaUrl'?: string;
      'styleUrl'?: string;
      'surveyUrl'?: string;
      'token'?: string;
      'trainDefaultLat'?: number;
      'trainDefaultLon'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpCommentDetail {
      'feature': any;
    }
  }

  interface HTMLLrtpCommentDetailElement extends StencilComponents.LrtpCommentDetail, HTMLStencilElement {}

  var HTMLLrtpCommentDetailElement: {
    prototype: HTMLLrtpCommentDetailElement;
    new (): HTMLLrtpCommentDetailElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-comment-detail': HTMLLrtpCommentDetailElement;
  }
  interface ElementTagNameMap {
    'lrtp-comment-detail': HTMLLrtpCommentDetailElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-comment-detail': JSXElements.LrtpCommentDetailAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpCommentDetailAttributes extends HTMLAttributes {
      'feature'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpCommentPage {
      'lat': number;
      'lon': number;
      'tmode': string;
    }
  }

  interface HTMLLrtpCommentPageElement extends StencilComponents.LrtpCommentPage, HTMLStencilElement {}

  var HTMLLrtpCommentPageElement: {
    prototype: HTMLLrtpCommentPageElement;
    new (): HTMLLrtpCommentPageElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-comment-page': HTMLLrtpCommentPageElement;
  }
  interface ElementTagNameMap {
    'lrtp-comment-page': HTMLLrtpCommentPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-comment-page': JSXElements.LrtpCommentPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpCommentPageAttributes extends HTMLAttributes {
      'lat'?: number;
      'lon'?: number;
      'tmode'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpLocationPage {
      'lat': number;
      'lon': number;
      'tmode': string;
    }
  }

  interface HTMLLrtpLocationPageElement extends StencilComponents.LrtpLocationPage, HTMLStencilElement {}

  var HTMLLrtpLocationPageElement: {
    prototype: HTMLLrtpLocationPageElement;
    new (): HTMLLrtpLocationPageElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-location-page': HTMLLrtpLocationPageElement;
  }
  interface ElementTagNameMap {
    'lrtp-location-page': HTMLLrtpLocationPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-location-page': JSXElements.LrtpLocationPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpLocationPageAttributes extends HTMLAttributes {
      'lat'?: number;
      'lon'?: number;
      'tmode'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpModePage {
      'lat': number;
      'lon': number;
      'next': 'location' | 'comment';
      'planeDefault': [number, number];
      'trainDefault': [number, number];
    }
  }

  interface HTMLLrtpModePageElement extends StencilComponents.LrtpModePage, HTMLStencilElement {}

  var HTMLLrtpModePageElement: {
    prototype: HTMLLrtpModePageElement;
    new (): HTMLLrtpModePageElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-mode-page': HTMLLrtpModePageElement;
  }
  interface ElementTagNameMap {
    'lrtp-mode-page': HTMLLrtpModePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-mode-page': JSXElements.LrtpModePageAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpModePageAttributes extends HTMLAttributes {
      'lat'?: number;
      'lon'?: number;
      'next'?: 'location' | 'comment';
      'planeDefault'?: [number, number];
      'trainDefault'?: [number, number];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpNotfoundPage {

    }
  }

  interface HTMLLrtpNotfoundPageElement extends StencilComponents.LrtpNotfoundPage, HTMLStencilElement {}

  var HTMLLrtpNotfoundPageElement: {
    prototype: HTMLLrtpNotfoundPageElement;
    new (): HTMLLrtpNotfoundPageElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-notfound-page': HTMLLrtpNotfoundPageElement;
  }
  interface ElementTagNameMap {
    'lrtp-notfound-page': HTMLLrtpNotfoundPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-notfound-page': JSXElements.LrtpNotfoundPageAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpNotfoundPageAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
