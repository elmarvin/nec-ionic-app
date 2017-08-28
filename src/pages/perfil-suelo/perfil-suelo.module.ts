import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilSueloPage } from './perfil-suelo';

@NgModule({
  declarations: [
    PerfilSueloPage,
  ],
  imports: [
    IonicPageModule.forChild(PerfilSueloPage),
  ],
  exports: [
    PerfilSueloPage
  ]
})
export class PerfilSueloPageModule {}
