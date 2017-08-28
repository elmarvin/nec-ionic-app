import { Component, ViewChild } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild('barCanvas') barCanvas;
  tarBarElement: any;

  barChart: any;
  series1 = [];
  series2 = [];
  public datof;
  public screenOrientationType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation, private androidFullScreen: AndroidFullScreen) {
    //this.tarBarElement = document.querySelector('.tabbar.show-tabbar');
    this.screenOrientationType = this.screenOrientation.type;
    this.series1 = [];
    this.series2 = [];
    this.datof = this.navParams.get("datos");
    console.log("entra a contact");
    console.log(this.datof);
    //v1 = v1(valueZ,fa,i,r1,Cei,Cpi);
    //public double v1(double z,double fa1,double i,double r,double ei,double pi){
    //double v=0;
    //v = ((i*(z*fa1))/(r*ei*pi));
    //return v;
    //}
    var v1 = ((this.datof.coeficientei * (this.datof.factorz * this.datof.resultados.varFa)) / (this.datof.resultados.varr * this.datof.confelevacion * this.datof.confplanta));
    console.log("var v1 >" + v1);

    //v2 = v2(valueZ,fa,i,r1,Cei,Cpi,AEspectral);
    /*public double v2(double z,double fa1,double i,double r,double ei,double pi,double n){
      double v=0;
      v = ((i*(n*z*fa1))/(r*ei*pi));
      return v;
    }*/
    var v2 = ((this.datof.coeficientei * (this.datof.resultados.varn * this.datof.factorz * this.datof.resultados.varFa)) / (this.datof.resultados.varr * this.datof.confelevacion * this.datof.confplanta));
    console.log("var v2 >" + v2);
    /*
    double v3 = v3(valueZ, fa, i, r1, Cei, Cpi, AEspectral, tc, R1);
    public double v3(double z, double fa1, double i, double r, double ei, double pi, double n, double tc, double R){
    double v= 0;
    double c= 4;
    for (double t= tc; t < c; t += 0.1){
      v = ((i * (n * z * fa1 * Math.pow((tc / t), R))) / (r * ei * pi));
      ValoresXY.get(0).add(t);
      ValoresXY.get(1).add(v);
      xvals.add(t);
      yvals.add(v);
    }
    return v;
    }*/
    var v3 = 0;
    for (var _i = this.datof.resultados.varTc; _i < 4; _i++) {
      var aux = ((this.datof.coeficientei * (this.datof.resultados.varn * this.datof.factorz * this.datof.resultados.varFa * Math.pow((this.datof.resultados.varTc / _i), this.datof.coeficienteR))) / (this.datof.resultados.varr * this.datof.confelevacion * this.datof.confplanta));
      console.log("punto " + _i + "-" + aux);
      this.series2.push(
        {
          x: _i,
          y: aux
        }
      );
    }
    v3 = aux;
    this.series1.push({
      x: 0,
      y: v1
    });
    this.series1.push({
      x: this.datof.resultados.varTo,
      y: v2
    });
    this.series1.push({
      x: this.datof.resultados.varTc,
      y: v2
    });
    console.log(this.series1);
    console.log(this.series2);
  }

  cambiarAux() {    
    if (this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE)) {
      
    } else {
      
    }
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.androidFullScreen.isImmersiveModeSupported()
      .then(() => this.androidFullScreen.immersiveMode())
      .catch((error: any) => console.log(error));
  }

  /*ionViewWillEnter(){
    this.tarBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tarBarElement.style.display = 'flex';
  }*/

  ionViewDidLoad() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'scatter',
      data: {
        datasets: [{
          
          label: 'zFa',
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.series1,
          lineTension: 0
        },
        {
          label: 'Sa',
          backgroundColor: "rgba(255, 99, 132, 0.4)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(255, 99, 132, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.series2
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'T(seg)'
            },
            type: 'linear',
            position: 'bottom'
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Sa(g)'
            },
            type: 'linear',
            position: 'bottom'
          }]
        }
      }
    });//fin chart
  }
}
