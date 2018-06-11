import { Component, Listen, Method, Prop } from '@stencil/core';

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
  @Prop() surveyUrl: string = 'http://ccrpc.org/';

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
      header: 'Take the Transportation Survey',
      message: 'Please share your thoughts about the future of ' +
        'transportation in our community by taking a brief survey. If you ' +
        'choose not to take the survey now, you can access it later using ' +
        'the <ion-icon name="bulb"></ion-icon> icon in the top toolbar.',
      buttons: [
        {
          text: 'Take Later',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Take Now',
          handler: () => {
            window.location.href = this.surveyUrl;
          }
        }
      ]
    });
  }
}
