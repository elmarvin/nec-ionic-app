import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfElevacionPage } from './conf-elevacion';

@NgModule({
  declarations: [
    ConfElevacionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfElevacionPage),
  ],
  exports: [
    ConfElevacionPage
  ]
})
export class ConfElevacionPageModule {}
