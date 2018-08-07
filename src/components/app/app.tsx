import { Component, Prop } from '@stencil/core';


@Component({
  styleUrl: 'app.scss',
  tag: 'lrtp-app'
})
export class App {
  @Prop() bbox: string;
  @Prop() commentUrl: string;
  @Prop() defaultLat: number;
  @Prop() defaultLon: number;
  @Prop() forwardGeocodeUrl: string;
  @Prop() reverseGeocodeUrl: string;
  @Prop() schemaUrl: string;
  @Prop() styleUrl: string;
  @Prop() surveyUrl: string;
  @Prop() token: string;

  render() {
    const modeProps = {
      lat: this.defaultLat,
      lon: this.defaultLon,
      next: 'location'
    };
    return (
      <ion-app>
        <ion-router>
          <ion-route url='/' component='lrtp-mode-page'
            componentProps={modeProps}></ion-route>
          <ion-route url='/mode/:lon/:lat'
            component='lrtp-mode-page'></ion-route>
          <ion-route url='/location/:tmode/:lon/:lat'
            component='lrtp-location-page'></ion-route>
          <ion-route url='/comment/:tmode/:lon/:lat'
            component='lrtp-comment-page'></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    );
  }
}
