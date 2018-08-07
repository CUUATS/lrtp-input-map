import { Component } from '@stencil/core';
import { _t } from '../i18n/i18n';


@Component({
  styleUrl: 'notfound-page.scss',
  tag: 'lrtp-notfound-page'
})
export class NotFoundPage {
  render() {
    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>{_t('lrtp.notfound-page.title')}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        Not found.
      </ion-content>
    ]);
  }
}
