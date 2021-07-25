/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ParametreCamionPDA } from '../models/parametreCamionPDA.model';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

  loginSucceeded = false;
  search: string;
  item: ParametreCamionPDA = {};
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    public alertController: AlertController,
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter) {
      this.item.CodeCamion = null;
      this.item.CodePDA = null;
      this.item.MatriculeCamion = null;
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'ParametreCamionPDA.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getData();
        });
    });
   }

  ngOnInit() {
    this.presentAlertPrompt();
  }

  login() {
    this.presentAlertPrompt();
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Authentification Requise',
      inputs: [
        {
          name: 'login',
          type: 'text',
        },
        {
          name: 'pass',
          type: 'password',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Login',
          handler: (alertData) => {
            if(alertData.login === 'admin' && alertData.pass ==='admin'){
              this.loginSucceeded = true;
            }
            console.log(alertData.pass);
          }
        }
      ]
    });
    await alert.present();
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  getData() {
    this.httpClient.get(
      'assets/database/PARAMETRE_CAMION_PDA.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getParams();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // Get list
  getParams() {
    return this.storage.executeSql('SELECT * FROM [ParametreCamionPDA]', []).then(res => {
      console.log(res);
      if (res.rows.length > 0) {
        this.item = res.rows.item(0);
      }
    });
  }

}
