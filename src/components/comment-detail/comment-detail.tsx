import { Component, Prop } from '@stencil/core';
import '@ionic/core';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
 tag: 'lrtp-comment-detail'
})
export class CommentDetail {
  @Prop() likeUrl: string;
  @Prop() feature: any;
  @Prop() token: string;

  locate() {
    if (!this.feature.geometry) return;
    let map = document.querySelector('gl-map');
    map.flyTo({
      center: this.feature.geometry.coordinates,
      zoom: 18
    });
  }

  render() {
    const props = this.feature.properties;
    const mode = this.feature.properties.comment_type.split(':')[0];
    const modeImage = '/lrtp-input/public/img/' + {
      'Walking or Wheelchair': 'pedestrian.png',
      'Bicycle': 'bicycle.png',
      'Bus': 'bus.png',
      'Automobile': 'automobile.png',
      'Train': 'train.png',
      'Plane': 'plane.png'
    }[mode];

    let dateStr = '';
    let date = new Date(this.feature.properties._created);
    if (!isNaN(date.getTime())) {
      dateStr = `${monthNames[date.getMonth()]} ${date.getDate()}, `
        + `${date.getFullYear()}`;
      if (props.comment_description) dateStr += ':';
    }

    return (
      <ion-item lines="full" text-wrap>
        <ion-avatar slot="start">
          <img src={modeImage} alt={mode} />
        </ion-avatar>
        <ion-label>
          <h2>{props.comment_type}</h2>
          <p>
            <strong>{dateStr}</strong>{' '}
            {props.comment_description || null}
          </p>
        </ion-label>
        <ion-button fill="clear" slot="end"
            onClick={() => this.locate()}>
          <ion-icon slot="icon-only" name="locate"></ion-icon>
        </ion-button>
        <gl-like-button slot="end" url={this.likeUrl} token={this.token}
          feature={this.feature}></gl-like-button>
      </ion-item>
    );
  }
}
