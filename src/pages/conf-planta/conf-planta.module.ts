import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfPlantaPage } from './conf-planta';

@NgModule({
  declarations: [
    ConfPlantaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfPlantaPage),
  ],
  exports: [
    ConfPlantaPage
  ]
})
export class ConfPlantaPageModule {}
