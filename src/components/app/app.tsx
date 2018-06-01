import { Component, Element, Prop } from '@stencil/core';
import '@cuuats/webmapgl';


@Component({
 tag: 'lrtp-app'
})
export class App {
  @Element() el: HTMLLrtpAppElement;

  @Prop() schemaUrl: string;
  @Prop() styleUrl: string;
  @Prop() token: string;

  closeDrawer() {
    let drawer = this.el.querySelector('gl-drawer');
    if (drawer.open) drawer.toggle();
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
            url="https://gis.ccrpc.org/pcd/public/lrtp.comment_2045"
            token={this.token} onClick={() => this.closeDrawer()}
            schema={this.schemaUrl} label="Add a Comment">
          </gl-feature-add>
        </gl-feature-buttons>
        <gl-drawer slot="after-content" drawer-title="Comments">
        </gl-drawer>
      </gl-app>
    ]);
  }
}
