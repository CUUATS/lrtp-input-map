import { Component, Element, Listen, Prop } from '@stencil/core';
import '@cuuats/webmapgl';


@Component({
 tag: 'lrtp-app'
})
export class App {
  @Element() el: HTMLLrtpAppElement;

  @Prop({connect: 'ion-toast-controller'}) toastCtrl!:
    HTMLIonToastControllerElement;

  @Prop() commentUrl: string;
  @Prop() likeUrl: string;
  @Prop() schemaUrl: string;
  @Prop() styleUrl: string;
  @Prop() token: string;

  closeDrawer() {
    let drawer = this.el.querySelector('gl-drawer');
    if (drawer.open) drawer.toggle();
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

  render() {
    return ([
      <gl-app label="Transportation Choices" menu={false}>
        <gl-basemaps slot="end-buttons"></gl-basemaps>
        <gl-fullscreen slot="end-buttons"></gl-fullscreen>
        <gl-drawer-toggle slot="end-buttons" icon="chatbubbles">
        </gl-drawer-toggle>
        <gl-map
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
        <gl-drawer slot="after-content" open={true} drawer-title="Comments">
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
