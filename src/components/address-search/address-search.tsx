import { Component, Listen, Prop } from '@stencil/core';
import { _t } from '../i18n/i18n';


@Component({
  tag: 'lrtp-address-search'
})
export class AddressSearch {
  input?: HTMLIonInputElement;
  geocodeCtrl?: HTMLGlGeocodeControllerElement;

  @Prop({connect: 'gl-geocode-controller'}) lazyGeocodeCtrl!:
    HTMLGlGeocodeControllerElement;
  @Prop({connect: 'ion-toast-controller'}) toastCtrl!:
    HTMLIonToastControllerElement;

  @Prop() bbox: [number, number, number, number];
  @Prop() forwardGeocodeUrl: string;
  @Prop() jobId: string = 'lrtp-search';

  async componentWillLoad() {
    this.geocodeCtrl = await this.lazyGeocodeCtrl.componentOnReady();
  }

  @Listen('body:glForwardGeocode')
  async handleGeocode(e: CustomEvent) {
    let results = e.detail.results;
    let message;
    if (results && results.length) {
      this.zoomToResult(results[0]);
      message = _t('lrtp.address-search.success', {
        location: this.formatAddress(results[0].address)
      });
    } else {
      message = _t('lrtp.address-search.failure');
    }

    let options = {
      message: message,
      duration: 3000
    };

    let toast = await this.toastCtrl.create(options);
    await toast.present();
    return toast;
  }

  @Listen('keydown.enter')
  handleEnter(){
    this.geocode();
  }

  formatAddress(address: any) {
    let parts = [];
    if (address.name &&
        address.name != address.housenumber &&
        address.name != address.city)
      parts.push(address.name);
    if (address.street) {
      let part = address.street;
      if (address.housenumber) part = address.housenumber + ' ' + part;
      parts.push(part);
    }
    if (address.city) parts.push(address.city);
    return parts.join(', ');
  }

  zoomToResult(result: any) {
    let map = document.querySelector('gl-map');
    map.fitBounds(result.bbox, {
      maxZoom: 18,
      padding: 20
    });
  }

  async geocode() {
    this.geocodeCtrl.forward({
      address: this.input.value,
      url: this.forwardGeocodeUrl,
      bbox: this.bbox,
      bounded: true,
      jobId: this.jobId,
      limit: 1
    });
  }

  render() {
    return (
      <ion-toolbar color="secondary">
        <ion-input ref={(r: HTMLIonInputElement) => this.input = r}
          placeholder="Search by address or place name..."></ion-input>
        <ion-buttons slot="end" onClick={() => this.geocode()}>
          <ion-button>
            <ion-icon slot="icon-only" name="search"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    );
  }
}
