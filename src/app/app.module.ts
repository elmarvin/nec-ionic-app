import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FactorZPage } from '../pages/factor-z/factor-z';
import { ModalContentPage } from '../pages/factor-z/factor-z';
import { PerfilSueloPage } from '../pages/perfil-suelo/perfil-suelo';
import { CoeficienteIPage } from '../pages/coeficiente-i/coeficiente-i';
import { CoeficienteRPage } from '../pages/coeficiente-r/coeficiente-r';
import { CoeficienteCtyaPage } from '../pages/coeficiente-ctya/coeficiente-ctya';
import { ConfElevacionPage } from '../pages/conf-elevacion/conf-elevacion';
import { ConfPlantaPage } from '../pages/conf-planta/conf-planta';

import { SQLite } from '@ionic-native/sqlite';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DbProvider } from '../providers/db/db';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FactorZPage,
    PerfilSueloPage,
    CoeficienteIPage,
    CoeficienteRPage,
    CoeficienteCtyaPage,
    ConfElevacionPage,
    ConfPlantaPage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FactorZPage,
    PerfilSueloPage,
    CoeficienteIPage,
    CoeficienteRPage,
    CoeficienteCtyaPage,
    ConfElevacionPage,
    ConfPlantaPage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    DbProvider,
    ScreenOrientation,
    AndroidFullScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}    
  ]
})
export class AppModule {}
