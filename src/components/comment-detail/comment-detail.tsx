import { Component, Prop } from '@stencil/core';
import { _t } from '../i18n/i18n';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  styleUrl: 'comment-detail.scss',
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

  hostData() {
    return {
      class: `lrtp-mode-${this.feature.properties.comment_mode}`
    };
  }

  render() {
    const small = screen.width <= 640;
    const props = this.feature.properties;
    const mode = props.comment_mode;
    const modeImage = '/voices/public/img/' + mode + '.png';
    const comment = (_t(`lrtp.modes.${mode}.label`) + ': ' +
      _t(`lrtp.modes.${props.comment_type}`)).replace(/\([^)]*\)/g, '');

    let dateStr = '';
    let date = new Date(this.feature.properties._created);
    if (!isNaN(date.getTime())) {
      dateStr = `${monthNames[date.getMonth()]} ${date.getDate()}, `
        + `${date.getFullYear()}`;
      if (props.comment_description) dateStr += ':';
    }

    return (
      <ion-item lines="full">
        {(small) ? null: <ion-avatar slot="start">
            <img src={modeImage} alt={mode} />
          </ion-avatar>}
        <ion-label text-wrap>
          <h2>{comment}</h2>
          <p>
            <strong>{dateStr}</strong>{' '}
            {props.comment_description || null}
          </p>
        </ion-label>
        <ion-button fill="clear" slot="end" class="lrtp-locate-button"
            onClick={() => this.locate()}>
          <ion-icon slot="icon-only" name="locate"></ion-icon>
        </ion-button>
        <gl-like-button slot="end" url={this.likeUrl} token={this.token}
          feature={this.feature}></gl-like-button>
      </ion-item>
    );
  }
}
