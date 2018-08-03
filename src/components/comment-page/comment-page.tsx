import { Component, Prop } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { _t } from '../i18n/i18n';

@Component({
  styleUrl: 'comment-page.scss',
  tag: 'lrtp-comment-page'
})
export class CommentPage {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  render() {
    const title = _t('lrtp.comment-page.title');
    const description = _t('lrtp.comment-page.description');
    return ([
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>{title}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <p>{description}</p>
      </ion-content>
    ]);
  }
}
