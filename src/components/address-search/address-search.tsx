import { Component, Element, Listen, Prop, State } from '@stencil/core';
import { Mode } from '@ionic/core';
import { _t } from '../i18n/i18n';
import { formatAddress } from '../utils';


@Component({
  styleUrls: {
    ios: 'address-search.ios.scss',
    md: 'address-search.md.scss'
  },
  tag: 'lrtp-address-search'
})
export class AddressSearch {
  input?: HTMLIonInputElement;
  geocodeCtrl?: HTMLGlGeocodeControllerElement;
  mode!: Mode;

  @Element() el: HTMLLrtpAddressSearchElement;

  @State() hasFocus: boolean = false;
  @State() hasValue: boolean = false;
  @State() results: any[] = [];

  @Prop({connect: 'gl-geocode-controller'}) lazyGeocodeCtrl!:
    HTMLGlGeocodeControllerElement;

  @Prop() bbox: [number, number, number, number];
  @Prop() forwardGeocodeUrl: string;
  @Prop() jobId: string = 'lrtp-search';
  @Prop() limit: number = 10;

  async componentWillLoad() {
    this.geocodeCtrl = await this.lazyGeocodeCtrl.componentOnReady();
  }

  @Listen('body:glForwardGeocode')
  async handleGeocode(e: CustomEvent) {
    this.results = e.detail.results;
  }

  @Listen('body:click')
  handleBodyClick() {
    this.hasFocus = false;
  }

  @Listen('keydown.down')
  handleDown(e) {
    let nextItem;
    if (document.activeElement.tagName === 'ION-ITEM') {
      this.unsetFocus();
      nextItem = document.activeElement.nextElementSibling;
    }
    if (!nextItem) nextItem = this.el.querySelector('ion-item');
    if (nextItem) {
      e.preventDefault();
      this.setFocus(nextItem);
    }
  }

  @Listen('keydown.up')
  handleUp(e) {
    if (document.activeElement.tagName === 'ION-ITEM') {
      e.preventDefault();
      this.unsetFocus();
      let prevItem = document.activeElement.previousElementSibling;
      if (prevItem) {
        this.setFocus(prevItem);
      } else if (this.input) {
        this.input.querySelector('input').focus();
      }
    }
  }

  setFocus(el: Element) {
    let button = el.shadowRoot.querySelector('button');
    button.focus();
    button.style.color = '#3880ff';
  }

  unsetFocus() {
    let button = document.activeElement.shadowRoot.querySelector('button');
    button.style.color = null;
  }

  async selectResult(result: any) {
    let map = document.querySelector('gl-map');
    map.fitBounds(result.bbox, {
      maxZoom: 18,
      padding: 20
    });
    this.hasFocus = false;
  }

  async geocode() {
    this.geocodeCtrl.forward({
      address: this.input.value,
      url: this.forwardGeocodeUrl,
      bbox: this.bbox,
      bounded: true,
      jobId: this.jobId,
      limit: this.limit
    });
  }

  renderResults() {
    if (!this.results.length || !this.hasValue || !this.hasFocus) return null;
    let items = this.results.map((result) => (
      <ion-item button={true} onClick={() => this.selectResult(result)}>
        <ion-icon name="pin" slot="start"></ion-icon>
        <ion-label>{formatAddress(result.address)}</ion-label>
      </ion-item>
    ));
    return (
      <ion-list lines="full">{items}</ion-list>
    );
  }

  handleChange() {
    if (this.input && this.input.value) {
      this.hasValue = true;
      this.geocode();
    } else {
      this.hasValue = false;
      if (this.results.length) this.results = [];
    }
  }

  handleFocus() {
    this.hasFocus = true;
  }

  handleClick(e) {
    // Prevent propagation of click events from the searchbar so that
    // it does not lose focus.
    e.stopPropagation();
  }

  render() {
    return ([
      <ion-searchbar ref={(r: HTMLIonInputElement) => this.input = r}
        placeholder={_t('lrtp.address-search.prompt')}
        onIonChange={() => this.handleChange()}
        onIonFocus={() => this.handleFocus()}
        onClick={(e) => this.handleClick(e)}>
      </ion-searchbar>,
      this.renderResults()
    ]);
  }
}
