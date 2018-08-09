import { Component, Listen, Prop, State } from '@stencil/core';
import { FormOptions } from
  '@cuuats/webmapgl/src/components/form-controller/form-controller';
import { _t } from '../i18n/i18n';
import { formatAddress } from '../utils';


const COMMENTS_KEY = 'lrtp.comments';

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

  @Prop() lat: number;
  @Prop() lon: number;
  @Prop() reverseGeocodeUrl: string;
  @Prop() tmode: string;

  async componentWillLoad() {
    this.loadFeatures();
    await this.reverseGeocodeLocation();
  }

  @Listen('body:glFormSubmit')
  async submitForm(e: CustomEvent) {
    e.detail.feature.properties._created = (new Date()).getTime();
    this.features = [e.detail.feature, ...this.features];
    this.saveFeatures();
  }

  loadFeatures() {
    const featureString = sessionStorage.getItem(COMMENTS_KEY) || '[]';
    this.features = JSON.parse(featureString);
  }

  saveFeatures() {
    // Suppress exceptions due to private browsing or full session storage.
    try {
      sessionStorage.setItem(COMMENTS_KEY, JSON.stringify(this.features));
    } catch {}
  }

  async reverseGeocodeLocation() {
    this.geocodeCtrl = await this.lazyGeocodeCtrl.componentOnReady();
    let response = await this.geocodeCtrl.reverse({
      url: this.reverseGeocodeUrl,
      location: {
        lon: this.lon,
        lat: this.lat
      }
    });
    this.address = (response.address) ?
      formatAddress(response.address) : _t('lrtp.comment-page.location');
  }

  changeMode() {
    const router = document.querySelector('ion-router');
    router.push(`/mode/${this.lon}/${this.lat}`);
  }

  changeLocation() {
    const router = document.querySelector('ion-router');
    router.push(`/location/${this.tmode}/${this.lon}/${this.lat}`);
  }

  async addComment() {
    const options: FormOptions = {
      translate: true,
      label: _t('lrtp.comment-page.form-title')
    };
    let feature = {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [this.lon, this.lat]
      },
      properties: {
        comment_mode: this.tmode,
        comment_address: this.address
      }
    };
    let modal = await this.formCtrl.create(
      `/voices/public/${this.tmode}-form.json`, feature, options);
    await modal.present();
  }

  render() {
    const modeLabel = _t(`lrtp.modes.${this.tmode}.label`);
    const modeIcon = {
      'pedestrian': 'walk',
      'bicycle': 'bicycle',
      'bus': 'bus',
      'automobile': 'car',
      'train': 'train',
      'plane': 'airplane'
    }[this.tmode];
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
