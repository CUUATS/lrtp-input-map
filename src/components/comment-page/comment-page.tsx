import { Component, Listen, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { FormOptions } from '@cuuats/webmapgl/src/components/form-controller/form-controller';
import { _t } from '../i18n/i18n';
import { formatAddress } from '../utils';


@Component({
  styleUrl: 'comment-page.scss',
  tag: 'lrtp-comment-page'
})
export class CommentPage {
  geocodeCtrl?: HTMLGlGeocodeControllerElement;

  @State() address: string;
  @State() features: any[] = [];

  @Prop({connect: 'gl-form-controller'}) formCtrl!:
    HTMLGlFormControllerElement;
  @Prop({connect: 'gl-geocode-controller'}) lazyGeocodeCtrl!:
    HTMLGlGeocodeControllerElement;

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  async componentWillLoad() {
    const app = document.querySelector('lrtp-app');
    this.geocodeCtrl = await this.lazyGeocodeCtrl.componentOnReady();
    let response = await this.geocodeCtrl.reverse({
      url: app.reverseGeocodeUrl,
      location: {
        lon: parseFloat(this.match.params.lon),
        lat: parseFloat(this.match.params.lat)
      }
    });
    this.address = (response.address) ?
      formatAddress(response.address) : _t('lrtp.comment-page.location');
  }

  @Listen('body:glFormSubmit')
  async submitForm(e: CustomEvent) {
    e.detail.feature.properties._created = (new Date()).getTime();
    this.features = [e.detail.feature, ...this.features];
  }

  changeMode() {
    const params = this.match.params;
    this.history.push(`/mode/${params.lon}/${params.lat}`);
  }

  changeLocation() {
    const params = this.match.params;
    this.history.push(`/location/${params.mode}/${params.lon}/${params.lat}`);
  }

  async addComment() {
    const params = this.match.params;
    const options: FormOptions = {
      translate: true,
      label: _t('lrtp.comment-page.form-title')
    };
    let feature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [params.lon, params.lat]
      },
      properties: {
        comment_mode: params.mode,
        comment_address: this.address
      }
    };
    let modal = await this.formCtrl.create(
      `/voices/public/${params.mode}-form.json`, feature, options);
    await modal.present();
  }

  render() {
    const modeLabel = _t(`lrtp.modes.${this.match.params.mode}.label`);
    const modeIcon = {
      'pedestrian': 'walk',
      'bicycle': 'bicycle',
      'bus': 'bus',
      'automobile': 'car',
      'train': 'train',
      'plane': 'airplane'
    }[this.match.params.mode];
    const change = _t('lrtp.comment-page.change');

    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>{_t('lrtp.comment-page.title')}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list lines="full">
          <ion-list-header color="light">
            <ion-label>{_t('lrtp.comment-page.new')}</ion-label>
          </ion-list-header>
          <ion-item>
            <ion-icon slot="start" name={modeIcon}></ion-icon>
            {modeLabel}
            <ion-button slot="end" size="small" fill="outline"
                onClick={() => this.changeMode()}>
              {change}
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-icon slot="start" name="pin"></ion-icon>
            {this.address}
            <ion-button slot="end" size="small" fill="outline"
                onClick={() => this.changeLocation()}>
              {change}
            </ion-button>
          </ion-item>
        </ion-list>
        <div padding>
          <ion-button expand="block" onClick={() => this.addComment()}>
            <ion-icon slot="start" name="create"></ion-icon>
            Add a Comment
          </ion-button>
        </div>
        <gl-feature-list features={this.features} item={false} batchSize={100}
            component="lrtp-comment-detail">
          <ion-list-header color="light" slot="start">
            <ion-label>{_t('lrtp.comment-page.comments')}</ion-label>
          </ion-list-header>
        </gl-feature-list>
      </ion-content>
    ]);
  }
}
