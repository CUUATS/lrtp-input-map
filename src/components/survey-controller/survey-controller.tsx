import { Component, Listen, Method, Prop } from '@stencil/core';
import { _t } from '../i18n/i18n';


@Component({
  tag: 'lrtp-survey-controller'
})
export class SurveyController {
  comments: number = 0;
  likes: number = 0;
  prompted: boolean = false;

  @Prop({connect: 'ion-alert-controller'}) alertCtrl!:
    HTMLIonAlertControllerElement;

  @Prop() commentThreshold: number = 1;
  @Prop() likeThreshold: number = 2;
  @Prop() delay: number = 3000;

  async componentWillLoad() {
    this.prompted = localStorage.getItem('lrtp.survey.prompted') === 'true';
  }

  @Listen('body:glFeatureAdd')
  onFeatureAdd(e: CustomEvent) {
    if (e.detail.success) {
      this.comments += 1;
      this.onEvent(this.comments, this.commentThreshold);
    }
  }

  @Listen('body:glLike')
  onLike(e: CustomEvent) {
    if (e.detail.success) {
      this.likes += 1;
      this.onEvent(this.likes, this.likeThreshold);
    }
  }

  onEvent(count: number, threshold: number) {
    if (count >= threshold && !this.prompted) {
      this.prompted = true;
      localStorage.setItem('lrtp.survey.prompted', 'true');
      setTimeout(async () => {
        const alert = await this.create();
        return await alert.present();
      }, this.delay);
    }
  }

  @Method()
  create() {
    this.prompted = true;
    localStorage.setItem('lrtp.survey.prompted', 'true');

    return this.alertCtrl.create({
      header: _t('lrtp.survey-controller.title'),
      message: _t('lrtp.survey-controller.text', {
        icon: '<ion-icon name="bulb"></ion-icon>'
      }),
      buttons: [
        {
          text: _t('lrtp.survey-controller.later'),
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: _t('lrtp.survey-controller.now'),
          handler: () => {
            window.location.href =
              document.querySelector('lrtp-app').surveyUrl;
          }
        }
      ]
    });
  }
}
