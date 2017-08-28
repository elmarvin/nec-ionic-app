import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { CoeficienteIPage } from '../coeficiente-i/coeficiente-i';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilSueloPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil-suelo',
  templateUrl: 'perfil-suelo.html',
})
export class PerfilSueloPage {

  public info;
  public datof;
  public valorF;
  public pasoNro;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) 
  {
    this.datof=this.navParams.get("datos");
    console.log("llega perfil suelo")
    console.log(this.datof);
    this.valorF="";
    this.pasoNro = this.navCtrl.indexOf(this.navCtrl.getActive())+1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilSueloPage');
  }
  

  public base = [
    {
      "ID": "A",
      "DESCRIPCION": "Perfil de roca competente",
      "DEFINICION": ["1500 m/s"],
      "visible":false,
      "info":""
    },
    {
      "ID": "B",
      "DESCRIPCION": "Perfil de roca de rigidéz media",
      "DEFINICION": ["1500 m/s Vs > 760 m/s"],
      "visible":false,
      "info":""      
    },
    {
      "ID": "C",
      "DESCRIPCION": "- Perfiles de suelos muy densos o roca blanda, que cumplan con el criterio de velocidad de la onda cortante.\n- Perfiles de suelos muy densos o roca blanda, que cumplan con cualquiera de los dos criterios",
      "DEFINICION": ["760m/s > Vs > 360 m/sn", "N>50.0"],
      "visible":false,
      "info":""          
    },
    {
      "ID": "D",
      "DESCRIPCION": "- Perfiles de suelos rígidos que cumplan  con el criterio de velocidad de la onda de cortante.\n- Perfiles de suelos rígidos que cumplan  con cualquiera de las dos condiciones.",
      "DEFINICION": ["50>N>15.0","100Kpa>Su>50Kpa"],
      "visible":false,
      "info":""
    },
    {
      "ID": "E",
      "DESCRIPCION": "- Perfil que cumpla el criterio de velocidad de la onda de cortante.\n- Perfil que contiene un espesor total H mayor de 3 m de arcillas blandas.",
      "DEFINICION": ["IP>20","w>40%","Su<50Kpa"],
      "visible":false,
      "info":""
    },
    {
      "ID": "F",
      "DESCRIPCION": "Los perfiles de suelo tipo F, requieren una evaluación realizada explicitamente en el sitio por un ingeniero geotecnista. Se contemplan las siguientes subclases :" +
                        "<br>F1.- Suelos susceptibles a la falla o colapso causado por la excitación sismica, tales como: suelos licuables, arcillas sensitivas, suelos dispersivos o debilmente cementados, etc" +
                        "<br>F2.- Turba y arcillas orgánicas y muy orgánicas (H > 3 m para turba o arcillas orgánicas y muy orgánicas." +
                        "\nF3.- Arcillas de muy alta plasticidad (H > 7.5 m con índice de plasticidad IP > 75)." +
                        "\nF4.- Perfiles de gran espesor de arcillas de rigidez mediana a blanda (H > 30 m)." +
                        "\nF5.- Suelos con constrastes de impedancia ocurriendo dentro de los primeros 30 m superiores del perfil de subsuelo, incluyendo contactos entre suelos blandos y roca, con variaciones bruscas de velocidad de ondas de corte" +
                        "\nF6.- Rellenos colocados sin control ingenieril.",
      "DEFINICION": ["H>3m<br>H>7.5m"],
      "visible":false,
      "info":""  
    }   
  ]

  seleccion(s){
    this.datof["perfilsuelo"]=s.ID;
    if(s.ID == "F"){
      this.datof["valorF"]=this.valorF;
    }
    this.base.forEach(function(el){
      el.visible=false;
    });
    this.base[this.base.indexOf(s)].visible=true;
  }  

  showAlert(data) {
    let alert = this.alertCtrl.create({
      title: data.ID,
      subTitle: data.DESCRIPCION,
      buttons: ['OK']
    });
    alert.present();
  }

  doRetro(){
    if(this.navCtrl.canGoBack){
      this.navCtrl.pop();
    }
  }

  cambiarAux() {
    console.log("sale perfil suelo")
    console.log(this.datof);
    this.navCtrl.push(CoeficienteIPage, {datos:this.datof} );
  }

  setDescripcion(index){
    
  }

}
