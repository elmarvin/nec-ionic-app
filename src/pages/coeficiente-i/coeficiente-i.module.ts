import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoeficienteIPage } from './coeficiente-i';

@NgModule({
  declarations: [
    CoeficienteIPage,
  ],
  imports: [
    IonicPageModule.forChild(CoeficienteIPage),
  ],
  exports: [
    CoeficienteIPage
  ]
})
export class CoeficienteIPageModule {}
