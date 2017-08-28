import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { FactorZPage } from '../factor-z/factor-z';
import { DbProvider } from '../../providers/db/db';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //private options = { name: "data.db", location: 'default', createFromLocation: 1 };
  //private queryNames = "SELECT * FROM testTable";
  public names: String[] = [];
  data: any[] = [];
  auxiliar: string;
  public aux: any;
  db = null;

  lista = [
    {
      id: "factorZ",
      name: "Factor Z"
    },
    {
      id: "factorZ",
      name: "Perfil Suelo"
    },
    {
      id: "factorZ",
      name: "Coeficiente de Importancia"
    },
    {
      id: "factorZ",
      name: "Coeficiente R"
    },
    {
      id: "factorZ",
      name: "Coeficiente Ct y a"
    },
    {
      id: "factorZ",
      name: "Coeficiente en Planta"
    },
    {
      id: "factorZ",
      name: "Datos de Salida"
    }
  ];



  constructor(
    public navCtrl: NavController,
    public dbprovider: DbProvider,
    //public sqlite: SQLite,
    public splashScreen: SplashScreen,
    public platform: Platform
  ) {
    /**this.sqlite.create(this.options).then((db: SQLiteObject) => {
       db.executeSql(this.queryNames, {}).then((data) => {
      let rows = data.rows;
      for (let i = 0; i < rows.length; i++)
        this.names.push(rows.item(i).name);
      console.log("Number of names on database = " + this.names.length);
    })
     });**/
    //this.accessDB();
  }

  




  ionViewDidLoad() {
    //this.createDatabase();    
    console.log("ionviewload");
  }

  /**
   
   
  private createDatabase(){
    
    this.sqlite.create({
      name: 'data.db',
      location: 'default' 
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
  
  getAllTasks(){
    this.dbprovider.getAll()
    .then(data => {
      console.log(data);
      this.data = data;
    })
    .catch( error => {
      console.error( error );
    })
  }
  
  createTask(){
    let test:any = {
      title: 'Test',
      completed: true
    }    
    this.dbprovider.create(test);
  }*/

  cambiarAux() {
    this.navCtrl.push(FactorZPage, { factoz: "data-factor-z" });
  }
}
