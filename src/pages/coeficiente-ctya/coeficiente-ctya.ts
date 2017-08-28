import { Component } from '@angular/core';
import { ConfElevacionPage} from '../conf-elevacion/conf-elevacion';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoeficienteCtyaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coeficiente-ctya',
  templateUrl: 'coeficiente-ctya.html',
})
export class CoeficienteCtyaPage {
  public pasoNro;
  public tipo;
  public grupo;
  public valor;
  public altura;
  public datof;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = this.base[0];
    this.grupo = this.base[0].grupos[0];
    this.datof=this.navParams.get("datos");
    console.log("llega coeficientectya")
    console.log(this.datof);
    this.pasoNro = this.navCtrl.indexOf(this.navCtrl.getActive())+1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoeficienteCtyaPage');
  }

  onChangeTipo(p) {
    console.log(p);
  }
  onChangeGrupo(p) {
    console.log(p);
  }

  cambiarAux() {
    this.datof["coeficienteCt"]=this.grupo.ct;
    this.datof["coeficienteA"]=this.grupo.a;
    this.datof["altura"]=this.altura;
    console.log("sale coeificientei")
    console.log(this.datof);
    this.navCtrl.push(ConfElevacionPage, {datos:this.datof});
  }
  
  doRetro(){
    if(this.navCtrl.canGoBack){
      this.navCtrl.pop();
    }
  }


  public base = [
    {
      "id": 0,
      "name": "Estructuras de Acero",
      "grupos": [
        {
          "id": 0,
          "name": "Sin Arriostriamientos",
          "ct": 0.072,
          "a": 0.8
        },
        {
          "id": 1,
          "name": "Con Arriostriamientos",
          "ct": 0.073,
          "a": 0.75
        }]
    },
    {
      "id": 1,
      "name": "Pórticos Especiales de Hormigón Armado",
      "grupos": [
        {
          "id": 0,
          "name": "Sin muros estructurales ni diagonales rigidizadoras",
          "ct": 0.055,
          "a": 0.9
        },
        {
          "id": 1,
          "name": "Con muros estructurales o diagonales rigidizadoras y para otras estructuras basadas en muros estructurales y mamposteria estructural",
          "ct" : 0.055,
          "a": 0.75
        }]
    }];

}
