import { Component, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
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

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  componentDidLoad() {
    this.map.resizeMap();
    if (doOnce('lrtp.location-page.popup')) this.showPopup();
  }

  async showPopup() {
    const mode = this.match.params.mode;
    const mode_verb = _t(`lrtp.location-page.${mode}`);
    let alert = await this.alertCtrl.create({
      header: _t('lrtp.location-page.title'),
      message: _t('lrtp.location-page.intro', {
        mode_verb: `<strong>${mode_verb}</strong>`,
      }),
      buttons: [_t('lrtp.location-page.okay')]
    });
    await alert.present();
  }

  async chooseLocation() {
    const mode = this.match.params.mode;
    const center = await this.map.getCenter();
    this.history.push(`/comment/${mode}/${center.lng}/${center.lat}`);
  }

  render() {
    const title = _t('lrtp.location-page.title');
    const app = document.querySelector('lrtp-app');
    const bbox = app.bbox.split(',').map((c) => parseFloat(c));

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
        <lrtp-address-search forwardGeocodeUrl={app.forwardGeocodeUrl}
          bbox={bbox as any}></lrtp-address-search>
        <gl-map ref={(r: HTMLGlMapElement) => this.map = r}
            longitude={-88.228878} latitude={40.110319} zoom={12} maxzoom={22}>
          <gl-style url="https://maps.cuuats.org/basemaps/basic/style.json"
            basemap={true}
            name={_t('lrtp.app.basemap.hybrid')} enabled={true}></gl-style>
        </gl-map>
        <img src="/voices/public/img/marker.svg" class="marker" />
      </ion-content>
    ]);
  }
}
