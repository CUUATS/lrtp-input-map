import { Component, Prop } from '@stencil/core';


@Component({
  styleUrl: 'app.scss',
  tag: 'lrtp-app'
})
export class App {
  @Prop() bbox: string;
  @Prop() commentUrl: string;
  @Prop() defaultLat: number;
  @Prop() defaultLon: number;
  @Prop() forwardGeocodeUrl: string;
  @Prop() reverseGeocodeUrl: string;
  @Prop() schemaUrl: string;
  @Prop() styleUrl: string;
  @Prop() surveyUrl: string;
  @Prop() token: string;

  render() {
    const modeProps = {
      defaultLat: this.defaultLat,
      defaultLon: this.defaultLon
    };
    return (
      <ion-app>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='lrtp-mode-page' exact={true}
              componentProps={modeProps} />
            <stencil-route url='/mode/:lon/:lat' component='lrtp-mode-page'
              componentProps={modeProps} />
            <stencil-route url='/location/:mode/:lon/:lat'
              component='lrtp-location-page' />
            <stencil-route url='/comment/:mode/:lon/:lat'
              component='lrtp-comment-page' />
          </stencil-route-switch>
        </stencil-router>
      </ion-app>
    );
  }
}
