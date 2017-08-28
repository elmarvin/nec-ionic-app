import { Component } from '@angular/core';
import { CoeficienteRPage } from '../coeficiente-r/coeficiente-r';
import { FactorZPage } from '../factor-z/factor-z';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoeficienteIPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coeficiente-i',
  templateUrl: 'coeficiente-i.html',
})
export class CoeficienteIPage {
  public datof;
  public pasoNro;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datof=this.navParams.get("datos");
    console.log("llega coeficientei")
    console.log(this.datof);
    this.pasoNro = this.navCtrl.indexOf(this.navCtrl.getActive())+1;
  }

  changeRange(){
    console.log("Estep "+this.pasoNro);
    console.log("idview "+this.navCtrl.indexOf(this.navCtrl.getActive()));
    if (this.pasoNro == 1) {
      this.navCtrl.push(this.navCtrl.getViews[1]);
    } else {
      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoeficienteIPage');
  }
  cambiarAux() {
    console.log("sale coeificientei")
    console.log(this.datof);
    this.navCtrl.push(CoeficienteRPage, {datos:this.datof});
  }

  doRetro(){
    if(this.navCtrl.canGoBack){
      this.navCtrl.pop();
    }
  }

  public base = [
    {
      "ID": "Edificaciones esenciales",
      "DESCRIPCION": "Hospitales, clinicas, centros de salud o emergencia sanitaria. Instalaciones militares, de policia, bomberos, defensa civil. Garajes o estacionamientos para vehiculos y aviones que atienden emergencias. Torres de control aereo. Estructuras de centros de telecomunicaciones u otros centros de atención de emergencias. Estructuras que albergan equipos de generación y distribución electrica. Tanques u otras estructuras utilizadas para depósito de agua u otras substancias anti-incendio. Estructuras que albergan depósitos tóxicos, explosivos, químicos u otras substancias peligrosas.",
      "VALOR":1.5,
      "visible": false,
      "info": ""
    },
    {
      "ID": "Estrucuras de ocupación especial",
      "DESCRIPCION": "Museos, iglesias, escuelas y centros de educación o deportivos que albergan más de trecientas personas. Todas las estructuras que albergan más de cinco mil personas. Edificios públicos que requieren operar continuamente.",
      "VALOR":1.3,
      "visible": false,
      "info": ""
    },
    {
      "ID": "Otras estructuras",
      "DESCRIPCION": "Todas las estructuras de edificación y otras que no clasifican dentro de las categorías anteriores.",
      "VALOR":1,
      "visible": false,
      "info": ""
    }];

    seleccion(s){
    this.datof["coeficientei"]=s.VALOR;
    this.base.forEach(function(el){
      el.visible=false;
    });
    this.base[this.base.indexOf(s)].visible=true;
  } 

}
