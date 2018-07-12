import { Component, Listen, Prop } from '@stencil/core';


@Component({
  tag: 'lrtp-address-search'
})
export class AddressSearch {
  input?: HTMLIonInputElement;
  geocodeCtrl?: HTMLGlGeocodeControllerElement;

  @Prop({connect: 'gl-geocode-controller'}) lazyGeocodeCtrl!:
    HTMLGlGeocodeControllerElement;

  @Prop() bbox: [number, number, number, number];
  @Prop() forwardGeocodeUrl: string;
  @Prop() jobId: string = 'lrtp-search';

  async componentWillLoad() {
    this.geocodeCtrl = await this.lazyGeocodeCtrl.componentOnReady();
  }

  @Listen('body:glForwardGeocode')
  handleGeocode(e: CustomEvent) {
    console.log(e);
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
