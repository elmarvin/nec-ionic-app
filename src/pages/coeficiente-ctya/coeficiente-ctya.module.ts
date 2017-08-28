import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoeficienteCtyaPage } from './coeficiente-ctya';

@NgModule({
  declarations: [
    CoeficienteCtyaPage,
  ],
  imports: [
    IonicPageModule.forChild(CoeficienteCtyaPage),
  ],
  exports: [
    CoeficienteCtyaPage
  ]
})
export class CoeficienteCtyaPageModule {}
