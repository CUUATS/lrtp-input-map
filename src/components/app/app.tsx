import { Component, Event, EventEmitter, Listen, Prop } from '@stencil/core';
import { _t } from '../i18n/i18n';


export const COMMENTS_KEY = 'lrtp.comments';

@Component({
  styleUrl: 'app.scss',
  tag: 'lrtp-app'
})
export class App {
  features: any[] = [];
  remoteCtrl?: HTMLGlRemoteControllerElement;

  @Prop({connect: 'ion-alert-controller'}) alertCtrl!:
    HTMLIonAlertControllerElement;
  @Prop({connect: 'gl-remote-controller'}) lazyRemoteCtrl!:
    HTMLGlRemoteControllerElement;
  @Prop({connect: 'ion-toast-controller'}) toastCtrl!:
    HTMLIonToastControllerElement;

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

  @Event() lrtpFeatureAdded: EventEmitter;

  @Listen('body:glFormSubmit')
  async submitForm(e: CustomEvent) {
    const feature = e.detail.feature;

    // Temporarily remove properties that are not saved to the database.
    const props = {...feature.properties};
    props._created = (new Date()).getTime();
    delete feature.properties.comment_address;
    delete feature.properties.comment_mode;

    let res;
    try {
      res = await this.remoteCtrl.send({
        url: this.commentUrl,
        feature: feature,
        token: this.token
      });
      feature.properties = props;
    } catch(e) {
      this.handleSubmit(false, feature);
    }
    if (res) this.handleSubmit(res.status === 200, feature);
  }

  async componentWillLoad() {
    this.loadFeatures();
    this.remoteCtrl = await this.lazyRemoteCtrl.componentOnReady();
  }

  async handleSubmit(success: boolean, feature: any) {
    let message;
    if (success) {
      let desc = feature.properties.comment_description;
      message = (!desc || desc == '') ?
        _t('lrtp.app.comment.added') : _t('lrtp.app.comment.moderation');
    } else {
      message = _t('lrtp.app.comment.error');
    }

    let options = {
      message: message,
      duration: 3000
    };

    let toast = await this.toastCtrl.create(options);
    await toast.present();

    if (success) {
      this.features = [feature, ...this.features];
      this.saveFeatures();
      this.lrtpFeatureAdded.emit(this.features);
      if (this.features.length === 1) this.showThanksPopup();
    }
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

  async showThanksPopup() {
    let alert = await this.alertCtrl.create({
      header: _t('lrtp.app.thanks.title'),
      message: _t('lrtp.app.thanks.description'),
      buttons: [
        {
          text: _t('lrtp.app.thanks.add'),
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: _t('lrtp.app.thanks.survey'),
          handler: () => this.openSurvey()
        }
      ]
    });
    await alert.present();
  }

  openSurvey() {
    window.location.href = this.surveyUrl;
  }

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
      reverseGeocodeUrl: this.reverseGeocodeUrl,
      surveyUrl: this.surveyUrl
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
