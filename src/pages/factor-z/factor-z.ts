import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { PerfilSueloPage } from '../perfil-suelo/perfil-suelo';
import { ModalController, Platform, NavController, NavParams, ViewController } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

declare var google;
/**
 * Generated class for the FactorZPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-factor-z',
  templateUrl: 'factor-z.html',
})
export class FactorZPage {

  public itemList: Array<Object>;
  public aux: any;
  public pasoNro;
  public provincia: any;
  public canton = {};
  public parroquia = {};
  public poblacion = {};
  public valorFinal;
  public flajSearch = true;

  searchTerm: string = '';
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public platform: Platform, public dataService: DbProvider, public modalCtrl: ModalController) {
    this.aux = this.dataService.aux;
    this.provincia = this.aux.provincias[0];
    this.pasoNro = 1;
  }

  changeRange(){
    console.log("Estep "+this.pasoNro);
    console.log("idview "+this.navCtrl.indexOf(this.navCtrl.getActive()));
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, this.poblacion);
    modal.present();
  }

  setFilteredItems() {
    if (this.searchTerm.length > 2) {
      this.flajSearch = false;
      this.items = this.dataService.filterItems(this.searchTerm);
    } else {
      this.items = [];
    }
  }

  cancelSearch() {
    this.items = [];
    this.flajSearch = true;
  }


  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Información',
      message: 'Zona destinada para información de cada página de la aplicación.',
      buttons: ['Ok']
    });
    alert.present()
  }

  itemSelected(i) {
    let prompt = this.alerCtrl.create({
      title: 'Confirmar',
      message: "Desea Seleccionar la población " + i.poblacion + " con valor de " + i.z,
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Cofirmar',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(PerfilSueloPage, { datos: { "factorz": i.z, "provincia": i.provincia } });
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactorZPage');
  }

  onChangeProv(p) {
    this.canton = {};
    this.parroquia = {};
    this.poblacion = {};
  }

  onChangeCanton(c) {
    this.parroquia = {};
    this.poblacion = {};
    /**
    this.cantonS = c;
    this.parroquiaS = this.cantonS.parroquias[0];
    this.poblacionS = this.parroquiaS.poblaciones[0];*/
  }

  onChangeParroquia(p) {
    this.poblacion = {};

    /*
    this.parroquiaS = p;
    this.poblacionS = this.parroquiaS.poblaciones[0];*/
  }

  onChangePoblacion(p) {
    this.valorFinal = p.z;
  }


  cambiarAux() {
    this.navCtrl.push(PerfilSueloPage, { datos: { "factorz": this.valorFinal, "provincia": this.provincia.name } });
  }

  acambiarAux() {
    this.navCtrl.push(PerfilSueloPage, { datos: { "factorz": this.valorFinal, "provincia": this.provincia.name } });    
  }

  doRetro(){
    if(this.navCtrl.canGoBack){
      this.navCtrl.pop();
    }
  }

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Mapa de {{poblacion}}
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <div #map id="map" style="width: 100%;height: 100%;"></div>  
</ion-content>
`
})



export class ModalContentPage {
  poblacion: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;


  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
    this.poblacion = this.params.get('pob');
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log("mapa load");
  }

  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

