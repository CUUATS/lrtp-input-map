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

import '@cuuats/webmapgl';
import '@ionic/core';
import 'ionicons';


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
      'forwardGeocodeUrl': string;
      'likeUrl': string;
      'multiuser': boolean;
      'schemaUrl': string;
      'styleUrl': string;
      'surveyUrl': string;
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
      'bbox'?: string;
      'commentUrl'?: string;
      'forwardGeocodeUrl'?: string;
      'likeUrl'?: string;
      'multiuser'?: boolean;
      'schemaUrl'?: string;
      'styleUrl'?: string;
      'surveyUrl'?: string;
      'token'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpCommentDetail {
      'feature': any;
      'likeUrl': string;
      'token': string;
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
      'likeUrl'?: string;
      'token'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface LrtpSurveyController {
      'commentThreshold': number;
      'create': () => Promise<HTMLIonAlertElement>;
      'delay': number;
      'likeThreshold': number;
    }
  }

  interface HTMLLrtpSurveyControllerElement extends StencilComponents.LrtpSurveyController, HTMLStencilElement {}

  var HTMLLrtpSurveyControllerElement: {
    prototype: HTMLLrtpSurveyControllerElement;
    new (): HTMLLrtpSurveyControllerElement;
  };
  interface HTMLElementTagNameMap {
    'lrtp-survey-controller': HTMLLrtpSurveyControllerElement;
  }
  interface ElementTagNameMap {
    'lrtp-survey-controller': HTMLLrtpSurveyControllerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'lrtp-survey-controller': JSXElements.LrtpSurveyControllerAttributes;
    }
  }
  namespace JSXElements {
    export interface LrtpSurveyControllerAttributes extends HTMLAttributes {
      'commentThreshold'?: number;
      'delay'?: number;
      'likeThreshold'?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
