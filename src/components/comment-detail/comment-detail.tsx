import { Component, Prop } from '@stencil/core';
import { _t } from '../i18n/i18n';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

@Component({
  styleUrl: 'comment-detail.scss',
  tag: 'lrtp-comment-detail'
})
export class CommentDetail {
  @Prop() feature: any;

  hostData() {
    return {
      class: `lrtp-mode-${this.feature.properties.comment_mode}`
    };
  }

  render() {
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
      if (props.comment_address) dateStr += ':';
    }

    return (
      <ion-item lines="full">
        <ion-avatar slot="start">
          <img src={modeImage} alt={mode} />
        </ion-avatar>
        <ion-label text-wrap>
          <h2>{comment}</h2>
          <p>
            <strong>{dateStr}</strong> {props.comment_address || null}
          </p>
          {(props.comment_description) ?
            <p>{props.comment_description}</p> : null}
        </ion-label>
      </ion-item>
    );
  }
}
