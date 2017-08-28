import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public datof;
  public varZ;
  public varFa;
  public varFd;
  public varFs;
  public varn;
  public varr;
  public varTo;
  public varTc;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.datof = this.navParams.get("datos");
    //this.varFa;
    console.log("llega about")
    console.log(this.datof);    
    var vz = this.datof.factorz;
    var Fa = this.datof.perfilsuelo;
    var faa;
    var fdd;
    var fss;
    var nn;
    var Too;
    var Tcc;
    var prov = this.datof.provincia;

    this.factorFA.forEach(function (it) {
      if (Fa == it.FA) {
        if (vz == 0.15) {
          faa = it.valores[0];
        }
        if (vz == 0.25) {
          faa = it.valores[1];
        }
        if (vz == 0.3) {
          faa = it.valores[2];
        }
        if (vz == 0.35) {
          faa = it.valores[3];
        }
        if (vz == 0.4) {
          faa = it.valores[4];
        }
        if (vz == 0.5) {
          faa = it.valores[5];
        }
      }
    });

    this.factorFD.forEach(function (it) {
      if (Fa == it.FD) {
        if (vz == 0.15) {
          fdd = it.valores[0];
        }
        if (vz == 0.25) {
          fdd = it.valores[1];
        }
        if (vz == 0.3) {
          fdd = it.valores[2];
        }
        if (vz == 0.35) {
          fdd = it.valores[3];
        }
        if (vz == 0.4) {
          fdd = it.valores[4];
        }
        if (vz == 0.5) {
          fdd = it.valores[5];
        }
      }
    });

    this.factorFS.forEach(function (it) {
      if (Fa == it.FS) {
        if (vz == 0.15) {
          fss = it.valores[0];
        }
        if (vz == 0.25) {
          fss = it.valores[1];
        }
        if (vz == 0.3) {
          fss = it.valores[2];
        }
        if (vz == 0.35) {
          fss = it.valores[3];
        }
        if (vz == 0.4) {
          fss = it.valores[4];
        }
        if (vz == 0.5) {
          fss = it.valores[5];
        }
      }
    });

    this.ampliacionEspectral.forEach(function (it) {
      if (it.provincia == prov) {
        nn = it.valor;
      }
    })

    if (Fa=="E") {
      this.varr = 1.5;
    } else {
      this.varr = 1;
    }

    Too = ((0.10*fss)*(fdd/faa));
    Tcc = ((0.55*fss)*(fdd/faa));

    this.varZ = this.datof.factorz;
    this.varFa = faa;
    this.varFd = fdd;
    this.varFs = fss;
    this.varn = nn;
    this.varTo = Too;
    this.varTc = Tcc;

    this.datof["resultados"]={
      "varZ" : this.datof.factorz,
      "varFa" : faa,
      "varFd" : fdd,
      "varFs" : fss,
      "varn" : nn,
      "varTo" : Too,
      "varTc" : Tcc,
      "varr" : this.varr
    }

  }//fin constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad about');

  }  

  cambiarAux() {
    console.log("sale about")
    console.log(this.datof);
    this.navCtrl.push(ContactPage, { datos: this.datof });
  }

  public factorFA =
  [
    {
      "FA": "A",
      "valores": [0.9, 0.9, 0.9, 0.9, 0.9, 0.9]
    },
    {
      "FA": "B",
      "valores": [1, 1, 1, 1, 1, 1]
    },
    {
      "FA": "C",
      "valores": [1.4, 1.3, 1.25, 1.23, 1.2, 1.18]
    },
    {
      "FA": "D",
      "valores": [1.6, 1.4, 1.3, 1.25, 1.2, 1.12]
    },
    {
      "FA": "E",
      "valores": [1.8, 1.4, 1.25, 1, 1, 0.85]
    },
    {
      "FA": "F",
      "valores": [0, 0, 0, 0, 0, 0]
    }
  ]

  factorFD =
  [
    {
      "FD": "A",
      "valores": [0.9, 0.9, 0.9, 0.9, 0.9]
    },
    {
      "FD": "B",
      "valores": [1, 1, 1, 1, 1, 1]
    },
    {
      "FD": "C",
      "valores": [1.36, 1.28, 1.19, 1.15, 1.11, 1.06]
    },
    {
      "FD": "D",
      "valores": [1.62, 1.45, 1.36, 1.28, 1.19, 1.11]
    },
    {
      "FD": "E",
      "valores": [2.1, 1.75, 1.7, 1.65, 1.6, 1.5]
    },
    {
      "FD": "F",
      "valores": [0, 0, 0, 0, 0, 0]
    }
  ]

  factorFS =
  [
    {
      "FS": "A",
      "valores": [0.75, 0.75, 0.75, 0.75, 0.75, 0.75]
    },
    {
      "FS": "B",
      "valores": [0.75, 0.75, 0.75, 0.75, 0.75, 0.75]
    },
    {
      "FS": "C",
      "valores": [0.85, 0.94, 1.02, 1.06, 1.11, 1.23]
    },
    {
      "FS": "D",
      "valores": [1.02, 1.06, 1.11, 1.19, 1.28, 1.4]
    },
    {
      "FS": "E",
      "valores": [1.5, 1.6, 1.7, 1.8, 1.9, 2]
    },
    {
      "FS": "F",
      "valores": [0, 0, 0, 0, 0, 0]
    }
  ]

  ampliacionEspectral = [
    {
      "id": 0,
      "provincia": "AZUAY",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 1,
      "provincia": "BOLIVAR",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 2,
      "provincia": "CARCHI",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 3,
      "provincia": "CAÑAR",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 4,
      "provincia": "CHIMBORAZO",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 5,
      "provincia": "COTOPAXI",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 6,
      "provincia": "EL ORO",
      "region": "Costa",
      "valor": 1.18
    },
    {
      "id": 7,
      "provincia": "ESMERALDAS",
      "region": "Costa",
      "valor": 2.48
    },
    {
      "id": 8,
      "provincia": "GUAYAS",
      "region": "Costa",
      "valor": 1.18
    },
    {
      "id": 9,
      "provincia": "IMBABURA",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 10,
      "provincia": "LOJA",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 11,
      "provincia": "LOS RÍOS",
      "region": "Costa",
      "valor": 1.18
    },
    {
      "id": 12,
      "provincia": "MANABÍ",
      "region": "Costa",
      "valor": 1.18
    },
    {
      "id": 13,
      "provincia": "MORONA SANTIAGO",
      "region": "Oriente",
      "valor": 2.6
    },
    {
      "id": 14,
      "provincia": "NAPO",
      "region": "Oriente",
      "valor": 2.6
    },
    {
      "id": 15,
      "provincia": "ORELLANA",
      "region": "Oriente",
      "valor": 2.6
    },
    {
      "id": 16,
      "provincia": "PASTAZA",
      "region": "Oriente",
      "valor": 2.6
    },
    {
      "id": 17,
      "provincia": "PICHINCHA",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 18,
      "provincia": "SANTA ELENA",
      "region": "Costa",
      "valor": 1.18
    },
    {
      "id": 19,
      "provincia": "SANTO DOMINGO DE LOS TSÁCHILAS",
      "region": "Oriente",
      "valor": 2.6
    },
    {
      "id": 20,
      "provincia": "SUCUMBIOS",
      "region": "Oriente",
      "valor": 2.6
    },
    {
      "id": 21,
      "provincia": "TUNGURAHUA",
      "region": "Sierra",
      "valor": 2.48
    },
    {
      "id": 22,
      "provincia": "ZAMORA CHINCHIPE",
      "region": "Oriente",
      "valor": 2.6
    },
    {
      "id": 23,
      "provincia": "ZONA NO DELIMITADA",
      "region": "Oriente",
      "valor": 2.6
    }
  ]
}
/**
 * {factorz: 0.25, coeficientei: 1.5, coeficienteR: 8, coeficienteCt: 0.072, coeficienteA: 0.8, …}
altura
:
"1"
coeficienteA
:
0.8
coeficienteCt
:
0.072
coeficienteR
:
8
coeficientei
:
1.5
confelevacion
:
1
confplanta
:
1
factorz
:
0.2

this.factorFA.forEach(function (it) {
      if (it.FA = Fa) {
        console.log("es igual");        
        if (this.varZ == 0.15) {
          this.varFa=it.valores[0];
        }
        if (this.varZ == 0.25) {
          this.varFa=it.valores[1];
        }
        if (this.varZ == 0.3) {
          this.varFa=it.valores[2];
        }
        if (this.varZ == 0.35) {
          this.varFa=it.valores[3];
        }
        if (this.varZ == 0.4) {
          this.varFa=it.valores[4];
        }
        if (this.varZ == 0.5) {
          this.varFa=it.valores[5];
        }
      }
    });
 */