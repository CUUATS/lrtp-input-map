import { Component, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { _t } from '../i18n/i18n';
import { doOnce } from '../utils';

@Component({
  styleUrl: 'mode-page.scss',
  tag: 'lrtp-mode-page'
})
export class ModePage {
  @Prop({connect: 'ion-alert-controller'}) alertCtrl!:
    HTMLIonAlertControllerElement;

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  componentDidLoad() {
    if (doOnce('lrtp.mode-page.popup')) this.showPopup();
  }

  async showPopup() {
    const title = _t('lrtp.mode-page.app_title');
    let alert = await this.alertCtrl.create({
      header: title,
      message: _t('lrtp.mode-page.intro', {
        title: title
      }),
      buttons: [_t('lrtp.mode-page.start')]
    });
    await alert.present();
  }

  getListItems() {
    const modes = [
      'pedestrian', 'bicycle', 'bus', 'automobile', 'train', 'plane'];
    const lon = this.match.params.lon || 0;
    const lat = this.match.params.lat || 0;

    return modes.map((mode) => (
      <stencil-route-link url={`/location/${mode}/${lon}/${lat}`}>
        <ion-item detail={true}>
          <ion-thumbnail slot="start">
            <img src={`/voices/public/img/${mode}.png`} />
          </ion-thumbnail>
          <ion-label text-wrap>{_t(`lrtp.mode-page.${mode}`)}</ion-label>
        </ion-item>
      </stencil-route-link>
    ));
  }

  render() {
    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>{_t('lrtp.mode-page.title')}</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={() => this.showPopup()}>
              <ion-icon slot="icon-only" name="help-circle-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          {this.getListItems()}
        </ion-list>
      </ion-content>
    ]);
  }
}
