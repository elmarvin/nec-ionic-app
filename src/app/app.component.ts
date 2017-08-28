import { Component }    from '@angular/core';
import { Platform }     from 'ionic-angular';
import { StatusBar }    from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite }       from '@ionic-native/sqlite';
import { TabsPage }     from '../pages/tabs/tabs';
//import { DbProvider }   from '../providers/db/db';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  auxGlobal:string;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    //public dbprovider: DbProvider,
    public sqlite: SQLite
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen
      this.splashScreen.hide();  
      //this.createDatabase();
    });    
  }

  public appcomponentts: any = "appcomponentts";

  /**
   private createDatabase(){
    
    this.sqlite.create({
      name: 'data.db',
      location: 'default' // the location field is required
    })
    .then((db) => {
      this.dbprovider.setDatabase(db);
      console.log('set_database...');
      return this.dbprovider.createTable();      
    })
    .then(() =>{
      this.splashScreen.hide();  
      this.rootPage = TabsPage;    
    })
    .catch(error =>{
      console.error(error);
    });
  } 
   */ 
}
