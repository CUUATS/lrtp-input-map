import { Component, Element, Listen, Prop } from '@stencil/core';
import '@cuuats/webmapgl';
import '@ionic/core';


@Component({
  styleUrl: 'app.scss',
  tag: 'lrtp-app'
})
export class App {
  clickCtrl?: HTMLGlClickControllerElement;
  surveyCtrl?: HTMLLrtpSurveyControllerElement;
  drawer?: HTMLGlDrawerElement;
  map?: HTMLGlMapElement;

  @Element() el: HTMLLrtpAppElement;

  @Prop({connect: 'gl-click-controller'}) lazyClickCtrl!:
    HTMLGlClickControllerElement;
  @Prop({connect: 'lrtp-survey-controller'}) lazySurveyCtrl!:
    HTMLLrtpSurveyControllerElement;
  @Prop({connect: 'ion-toast-controller'}) toastCtrl!:
    HTMLIonToastControllerElement;

  @Prop() commentUrl: string;
  @Prop() likeUrl: string;
  @Prop() schemaUrl: string;
  @Prop() styleUrl: string;
  @Prop() token: string;

  async componentDidLoad() {
    this.clickCtrl = await this.lazyClickCtrl.componentOnReady();
    this.clickCtrl.setClickable('lrtp:cluster', true);
    this.clickCtrl.setClickable('lrtp:comment', true);
    this.surveyCtrl = await this.lazySurveyCtrl.componentOnReady();
  }

  closeDrawer() {
    let drawer = this.el.querySelector('gl-drawer');
    if (drawer.open) drawer.toggle();
  }

  @Listen('body:glFeatureClick')
  async handleClick(e: CustomEvent) {
    const features = e.detail.features;
    if (!features || !features.length) return

    const feature = features[0];
    if (feature.layer.id === 'lrtp:comment') {
      this.drawer.open = true;
      let [fx, fy] = feature.geometry.coordinates;
      let found = 0;
      Array.from(document.querySelectorAll('lrtp-comment-detail'))
        .forEach((detail) => {
          let [dx, dy] = detail.feature.geometry.coordinates;
          if (Math.abs(fx - dx) > 0.00001 || Math.abs(fy - dy) > 0.00001)
            return;
          if (found++ === 0)
            detail.closest('ion-scroll').scrollTop = detail.offsetTop;
          let container = detail.querySelector('div.item');
          container.classList.add('flash');
          setTimeout(() => container.classList.remove('flash'), 1500);
        });
    } else {
      const zoom = await this.map.getZoom();
      const maxZoom = await this.map.getMaxZoom();
      this.map.easeTo({
        center: feature.geometry.coordinates,
        zoom: (zoom + 1 <= maxZoom) ? zoom + 1 : maxZoom
      });
    }
  }

  @Listen('glFeatureAdd')
  async handleFeatureAdd(e: CustomEvent) {
    const success = e.detail.success;
    const feature = e.detail.feature;

    let message;
    if (success) {
      let desc = feature.properties.comment_description;
      message = (!desc || desc == '') ?
        'Your comment has been added.' :
        'Your comment is awaiting moderation.';
    } else {
      message = 'An error occurred. Please try again later.';
    }

    let options = {
      message: message,
      duration: 3000
    };

    let toast = await this.toastCtrl.create(options);
    await toast.present();
    return toast;
  }

  async openSurvey() {
    let alert = await this.surveyCtrl.create();
    return await alert.present();
  }

  render() {
    return ([
      <gl-app label="C-U Transportation Voices" menu={false}>
        <gl-fullscreen slot="start-buttons"></gl-fullscreen>
        <gl-basemaps slot="start-buttons"></gl-basemaps>
        <ion-button slot="end-buttons" onClick={() => this.openSurvey()}>
          <ion-icon slot="icon-only" name="bulb"></ion-icon>
        </ion-button>
        <gl-drawer-toggle slot="end-buttons" icon="chatbubbles">
        </gl-drawer-toggle>
        <gl-map ref={(r: HTMLGlMapElement) => this.map = r}
            longitude={-88.228878} latitude={40.110319} zoom={12} maxzoom={22}>
          <gl-style url={this.styleUrl} id="lrtp"
            name="Comments" enabled={true} token={this.token}></gl-style>
          <gl-style url="https://maps.cuuats.org/basemaps/imagery/style.json"
            basemap={true}
            thumbnail="https://maps.cuuats.org/tiles/imagery/13/2087/3098.png"
            name="Imagery" enabled={false}></gl-style>
          <gl-style url="https://maps.cuuats.org/basemaps/hybrid/style.json"
            basemap={true}
            thumbnail="https://maps.cuuats.org/tiles/imagery/13/2087/3098.png"
            name="Hybrid" enabled={true}></gl-style>
        </gl-map>
        <gl-feature-buttons vertical="bottom" horizontal="end">
          <gl-feature-add layers="lrtp:comment"
            url={this.commentUrl}
            token={this.token} onClick={() => this.closeDrawer()}
            schema={this.schemaUrl} label="Add a Comment" alertDuration={0}>
          </gl-feature-add>
        </gl-feature-buttons>
        <gl-drawer slot="after-content" open={true} drawer-title="Comments"
            ref={(r: HTMLGlDrawerElement) => this.drawer = r}>
          <gl-feature-list source="lrtp:comments" item={false}
            component="lrtp-comment-detail"
            componentOptions={{'like-url': this.likeUrl, 'token': this.token}}
            orderBy="_created" order="desc">
          </gl-feature-list>
        </gl-drawer>
      </gl-app>
    ]);
  }
}
