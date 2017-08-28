import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoeficienteRPage } from './coeficiente-r';

@NgModule({
  declarations: [
    CoeficienteRPage,
  ],
  imports: [
    IonicPageModule.forChild(CoeficienteRPage),
  ],
  exports: [
    CoeficienteRPage
  ]
})
export class CoeficienteRPageModule {}
