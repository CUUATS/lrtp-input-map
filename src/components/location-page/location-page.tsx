import { Component, Prop } from '@stencil/core';
import { _t } from '../i18n/i18n';
import { doOnce } from '../utils';


@Component({
  styleUrl: 'location-page.scss',
  tag: 'lrtp-location-page'
})
export class LocationPage {
  map?: HTMLGlMapElement;

  @Prop({connect: 'ion-alert-controller'}) alertCtrl!:
    HTMLIonAlertControllerElement;

  @Prop() bbox: string;
  @Prop() forwardGeocodeUrl: string;
  @Prop() lat: number;
  @Prop() lon: number;
  @Prop() tmode: string;

  componentDidLoad() {
    this.map.resizeMap();
    if (doOnce('lrtp.location-page.popup')) this.showPopup();
  }

  async showPopup() {
    const action = _t(`lrtp.modes.${this.tmode}.action`);
    let alert = await this.alertCtrl.create({
      header: _t('lrtp.location-page.title'),
      message: _t('lrtp.location-page.intro', {
        action: `<strong>${action}</strong>`,
      }),
      buttons: [_t('lrtp.location-page.okay')]
    });
    await alert.present();
  }

  async chooseLocation() {
    const center = await this.map.getCenter();
    const router = document.querySelector('ion-router');
    router.push(`/comment/${this.tmode}/${center.lng}/${center.lat}`);
  }

  render() {
    const title = _t('lrtp.location-page.title');
    const bbox = this.bbox.split(',').map((c) => parseFloat(c));

    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>{title}</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.showPopup()}>
              <ion-icon slot="icon-only" name="help-circle-outline"></ion-icon>
            </ion-button>
            <ion-button onClick={() => this.chooseLocation()}>
              <ion-icon slot="icon-only" name="checkmark"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content scrollEnabled={false}>
        <lrtp-address-search forwardGeocodeUrl={this.forwardGeocodeUrl}
          bbox={bbox as any}></lrtp-address-search>
        <gl-map ref={(r: HTMLGlMapElement) => this.map = r}
            longitude={this.lon} latitude={this.lat} zoom={12} maxzoom={22}>
          <gl-style url="https://maps.cuuats.org/basemaps/basic/style.json"
            basemap={true} enabled={true}></gl-style>
        </gl-map>
        <img src="/voices-mobile/public/img/marker.svg" class="marker" />
      </ion-content>
    ]);
  }
}
