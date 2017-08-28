import { Component } from '@angular/core';
import { ConfPlantaPage} from '../conf-planta/conf-planta';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfElevacionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conf-elevacion',
  templateUrl: 'conf-elevacion.html',
})
export class ConfElevacionPage {
  public tipo;
  public ei;
  public datof;
  public pasoNro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = this.base[0];
    this.datof=this.navParams.get("datos");
    console.log("llega coefelevacion")
    console.log(this.datof);
    this.pasoNro = this.navCtrl.indexOf(this.navCtrl.getActive())+1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfElevacionPage');
  }

  onChangeTipo(p){
    console.log(p);
  }

  seleccion(s){
    this.ei = {"ei":s.valor}
    this.datof["confelevacion"]=s.valor;
    this.tipo.grupos.forEach(function(el){
      el.visible=false;
    });
    this.tipo.grupos[this.tipo.grupos.indexOf(s)].visible=true;
  } 

  cambiarAux() {    
    console.log("sale confelevacion")
    console.log(this.datof);
    this.navCtrl.push(ConfPlantaPage, {datos:this.datof});
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
      "grupos": [
        {
          "id": 0,
          "name": "La altura de entre piso y la configuración vertical de sistemas aporticados, es constante en todos los niveles.",
          "descripcion": "",
          "valor": 1,
          "visible": false,
          "img":"tabs/src/pages/conf-elevacion/img/reco1.png"
        },
        {
          "id": 1,
          "name": "La dimensión del muro permanece constante a lo largo de su altura o varía de forma proporcional.",
          "descripcion": "",
          "valor": 1,
          "visible": false
        }]
    },
    {
      "id": 1,
      "name": "No Recomendada",
      "grupos": [
        {
          "id": 0,
          "name": "Ejes verticales discontinuos o muros soportados por columnas. ",
          "descripcion": "La estructura de considera irregular no recomendada cuando existen desplazamientos en el alineamiento de elementos verticales del sistema resistente, dentro del mismo plano en el que se encuentran, y estos desplazamientos son mayores que la dimensión horizontal del elemento.",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 1,
          "name": "Piso débil - Discontinuidad en la resistencia. ",
          "descripcion": "La estructura se considera irregular no recomendada cuando la resistencia del piso es menor que el 70% de la resistencia del piso inmediatamente superior, (entendiendose por resistencia del piso la suma de las resistencias de todos los elementos que comparten el cortante del piso para la dirección considerada).",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 0,
          "name": "Columna corta.",
          "descripcion": " Se debe evitar la presencia de columnas cortas, tanto en el diseño como en la construción de las estructuras.",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 0,
          "name": "TIPO 1. PISO FLEXIBLE.",
          "descripcion": "Rigidez Kc < 0.70 Rigidez KD.                                                                La estructura se considera irregular cuando la rigidez lateral de un piso en menor que el 80% del promedio de la rigidez lateral de los tres pisos superiores.",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 0,
          "name": "TIPO 2. DISTRIBUCIÓN DE MASA.",
          "descripcion": "La estructura se considera irregular cuando la masa de cualquier piso es mayor que 1,5 veces la masa de uno de los pisos adyacentes, con execpción del piso de cubierta que sea más liviano que el inferior.",
          "valor": 0.9,
          "visible": false
        },
        {
          "id": 0,
          "name": "TIPO 3.  IRREGULARIDAD GEOMÉTRICA",
          "descripcion": " a > 1.3 b.                                                                                                           La estructura se considera irregular cuando la dimensión en planta del sistema resistente en cualquier piso es mayor que 1.3 veces la misma dimensión en un piso adyacente, exeptuando el caso de los altillos de un solo piso.",
          "valor": 0.9,
          "visible": false
        }
      ]
    }];

}
