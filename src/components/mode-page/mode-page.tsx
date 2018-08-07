import { Component, Prop } from '@stencil/core';
import { _t } from '../i18n/i18n';
import { doOnce } from '../utils';

@Component({
  styleUrl: 'mode-page.scss',
  tag: 'lrtp-mode-page'
})
export class ModePage {
  @Prop({connect: 'ion-alert-controller'}) alertCtrl!:
    HTMLIonAlertControllerElement;

  @Prop() next: 'location' | 'comment' = 'comment';
  @Prop() lat: number;
  @Prop() lon: number;

  componentDidLoad() {
    if (doOnce('lrtp.mode-page.popup')) this.showPopup();
  }

  async showPopup() {
    const title = _t('lrtp.app.title');
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

    return modes.map((mode) => (
      <ion-item detail={true}
          href={`#/${this.next}/${mode}/${this.lon}/${this.lat}`}>
        <ion-thumbnail slot="start">
          <img src={`/voices/public/img/${mode}.png`} />
        </ion-thumbnail>
        <ion-label text-wrap>{_t(`lrtp.modes.${mode}.label`)}</ion-label>
      </ion-item>
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
