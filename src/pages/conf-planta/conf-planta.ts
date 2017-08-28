import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfPlantaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conf-planta',
  templateUrl: 'conf-planta.html',
})
export class ConfPlantaPage {
  public tipo;
  public objetoDatos;
  public datof;
  public pasoNro;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = this.base[0];
    this.datof = this.navParams.get("datos");
    console.log("llega coefplanta")
    console.log(this.datof); 
    this.pasoNro = this.navCtrl.indexOf(this.navCtrl.getActive())+1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfPlantaPage');
  }

  onChangeTipo(p) {
    console.log(p);
  }

  seleccion(s) {
    this.datof["confplanta"] = s.valor;
    this.datof["confplantaRecNoRec"] = this.tipo.name;
    this.tipo.grupos.forEach(function (el) {
      el.visible = false;
    });
    this.tipo.grupos[this.tipo.grupos.indexOf(s)].visible = true;
  }

  cambiarAux() {
    console.log("sale confplanta")
    console.log(this.datof);
    this.navCtrl.push(AboutPage, { datos: this.datof });
  }

  doRetro(){
    if(this.navCtrl.canGoBack){
      this.navCtrl.pop();
    }
  }

  public base = [
    {
      "id": 0,
      "name": "Recomendada",
      "valor": 1,
      "grupos": [
        {
          "id": 0,
          "name": "La configuración en planta ideal en un sistema estructural es cuando el centro de rigidez es semejante al centro de masa",
          "descripcion": "",
          "valor": 1,
          "visible": false,
          "img": "tabs/src/pages/conf-elevacion/img/reco1.png"
        }]
    },
    {
      "id": 1,
      "name": "No Recomendada",
      "valor": 0.9,
      "grupos": [
        {
          "id": 0,
          "name": "Desplazamientos de los planos de acción de elementos vertical.",
          "descripcion": "Una estructura se considera irregular no recomendada cuando existen discontinuidades en los ejes verticales, tales como desplazamientos del plano de acción de elementos verticales del sistema resistente.",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 1,
          "name": "TIPO 1. IRREGULARIDAD TORSIONAL.",
          "descripcion": "Existe irregularidad por torsión, cuando la máxima deriva de piso de un extremo de la estructura calculada incluyendo la torsión accidental y media perpendicularmente a u eje determinado, es mayor que 1.2 veces la deriva promedio de los extremos de la estructura con respecto al mismo eje de referencia. La torsión accidental se define en el numeral 6.4.2 de la NEC (2015)",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 0,
          "name": "TIPO 2. RETROCESOS EN LAS ESQUINAS.",
          "descripcion": " A > 0.15B Y C > 0.15D. La configuracion de una estructura se considera irregular cuando presenta entrantes excesivos en sus esquinas. Un entrante en una esquina se considera excesivo cuando las proyecciones de la estructura, a ambos lados del entrante, son mayores que el 15% de la dimensión de la planta de la estructura en la dirección del entrante",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 0,
          "name": "TIPO 3. DISCONTINUIDADES EN EL SISTEMA DE PISO.",
          "descripcion": " CxD > 0.5AxB. [CxD + CxE] > 0.5AxB. La configuración de la estructura se considera irregular cuando el sistema de piso tiene discontinuidades apreciables o variaciones significativas en su rigidez, incluyendo las causadas por aberturas, entrantes o huecos, con áreas mayores al 50% del áreas total del piso o con cambios en la rigidez en el plano del sistema de piso de más del 50% entre niveles consecutivos ",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 0,
          "name": "TIPO 4. EJES ESTRUCTURALES NO PARALELOS.",
          "descripcion": "La estructura se considera irregular cuando los ejes estructurales no son paralelos o simétricos con respecto a los ejes ortogonales principales de la estructura.",
          "valor": 0.9,
          "visible": false
        }
      ]
    }];

}
