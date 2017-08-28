import { Component } from '@angular/core';
import { CoeficienteCtyaPage } from '../coeficiente-ctya/coeficiente-ctya';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoeficienteRPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-coeficiente-r',
  templateUrl: 'coeficiente-r.html',
})
export class CoeficienteRPage {

  public tipo;
  public grupo;
  public descripcion;
  public valor;
  public datof;
  public pasoNro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tipo = this.base[0];
    this.grupo = this.base[0].grupos[0];
    this.descripcion = this.base[0].grupos[0].descripciones[0];
    this.datof=this.navParams.get("datos");
    console.log("llega coeficienteR")
    console.log(this.datof);
    this.pasoNro = this.navCtrl.indexOf(this.navCtrl.getActive())+1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoeficienteRPage');
  }

  onChangeTipo(p) {
    console.log(p);
  }
  onChangeGrupo(p) {
    console.log(p);
  }
  onChangeDescripcion(p){
    console.log(p);
  }
  cambiarAux() {
    this.datof["coeficienteR"]=this.descripcion.valor;
    console.log("sale coeificienteR")
    console.log(this.datof);
    this.navCtrl.push(CoeficienteCtyaPage, {datos:this.datof});
  }

  doRetro(){
    if(this.navCtrl.canGoBack){
      this.navCtrl.pop();
    }
  }

  public base = [
    {
      "id": 0,
      "name": "Ductiles",
      "grupos": [
        {
          "id": 0,
          "name": "Sistemas Duales",
          "descripciones": [
            {
              "id": 0,
              "name": "Porticos Especiales sismo resistentes, de hormigón armado con vigas descolgadas y con muros estructurales de hormigón armado o con diagonales rigidizadoras (sistemas duales)",
              "valor": 8
            },
            {
              "id": 1,
              "name": "Porticos Especiales sismo resistentes de acero laminado en caliente, se con diagonales rigidizadoras (exéntricas o concéntricas) o con muros estructurales de hormigón aramado",
              "valor": 8
            },
            {
              "id": 2,
              "name": "Porticos con columnas de hormigón aramado y vigas de acero laminado en caliente con diagonales ridigizadoras (excéntricas y concéntricas)",
              "valor": 8
            },
            {
              "id": 3,
              "name": "Porticos especiales sismo resistentes, de hormigón armado con vigas banda, con muros estructurales de hormigón armado o con diagonales ridigizadoras ",
              "valor": 7
            }
          ]
        },
        {
          "id": 1,
          "name": "Porticos resistentes a momentos",
          "descripciones": [
            {
              "id": 0,
              "name": "Porticos Especiales sismo resistentes, de hormigón armado con vigas descolgadas",
              "valor": 8
            },
            {
              "id": 1,
              "name": "Porticos Especiales sismo resistentes de acero laminado en caliente o con elementos armados en placas",
              "valor": 8
            },
            {
              "id": 2,
              "name": "Porticos con columnas de hormigón aramado y vigas de acero laminado en caliente",
              "valor": 8
            }
          ]
        },
        {
          "id": 2,
          "name": "Otros sistemas estructurales para edificaciones",
          "descripciones": [
            {
              "id": 0,
              "name": "Sistemas de muros estructurales dúctiles de hormigón armado",
              "valor": 5
            },
            {
              "id": 1,
              "name": "Porticos Especiales sismo resistentes de hormigón armado con vigas banda",
              "valor": 5
            }
          ]
        }
      ]
    },
    {
      "id": 1,
      "name": "Ductibilidad limitada",
      "grupos": [
        {
          "id": 0,
          "name": "Pórticos resistentes a momento",
          "descripciones": [
            {
              "id": 0,
              "name": "Hormigón armado con secciones de dimensión menor a la especificada en la NEC-SE-HM limitados a viviendas de hasta 2 pisos con luces de hasta 5 metros",
              "valor": 3
            },
            {
              "id": 1,
              "name": "Hormigón armado con secciones de dimensión menor a la especificada en la NEC-SE-HM con armadura electrosoldada de alta resistencia",
              "valor": 2.5
            },
            {
              "id": 2,
              "name": "Estructuras de acero conformado en frío, aluminio, madera, limitados a dos pisos",
              "valor": 2.5
            }
          ]
        },
        {
          "id": 1,
          "name": "Muros estructurales portantes",
          "descripciones": [
            {
              "id": 0,
              "name": "Mamposteria no reforzada, limitada a un piso",
              "valor": 1
            },
            {
              "id": 1,
              "name": "Mamposteria reforzada, limitada a dos pisos",
              "valor": 3
            },
            {
              "id": 2,
              "name": "Mamposteria confinada, limitada a dos pisos",
              "valor": 3
            },
            {
              "id": 3,
              "name": "Muros de hormigón armado, limitados a cuatro pisos",
              "valor": 3
            }
          ]
        }
      ]
    }
  ];

}
