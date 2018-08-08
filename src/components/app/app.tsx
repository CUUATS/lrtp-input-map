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
  @Prop() planeDefaultLat: number;
  @Prop() planeDefaultLon: number;
  @Prop() reverseGeocodeUrl: string;
  @Prop() schemaUrl: string;
  @Prop() styleUrl: string;
  @Prop() surveyUrl: string;
  @Prop() token: string;
  @Prop() trainDefaultLat: number;
  @Prop() trainDefaultLon: number;

  render() {
    let modeProps = {
      lat: this.defaultLat,
      lon: this.defaultLon,
      next: 'location'
    };

    if (this.planeDefaultLat && this.planeDefaultLon)
      modeProps['planeDefault'] = [this.planeDefaultLon, this.planeDefaultLat];

    if (this.trainDefaultLat && this.trainDefaultLon)
      modeProps['trainDefault'] = [this.trainDefaultLon, this.trainDefaultLat];

    const locationProps = {
      bbox: this.bbox,
      forwardGeocodeUrl: this.forwardGeocodeUrl
    };

    const commentProps = {
      reverseGeocodeUrl: this.reverseGeocodeUrl
    };

    return (
      <ion-app>
        <ion-router>
          <ion-route url='/' component='lrtp-mode-page'
            componentProps={modeProps}></ion-route>
          <ion-route url='/mode/:lon/:lat'
            component='lrtp-mode-page'></ion-route>
          <ion-route url='/location/:tmode/:lon/:lat'
            component='lrtp-location-page'
            componentProps={locationProps}></ion-route>
          <ion-route url='/comment/:tmode/:lon/:lat'
            component='lrtp-comment-page'
            componentProps={commentProps}></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    );
  }
}
