/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { ListeProduitsComponent } from './../../../produits/liste-produits/liste-produits.component';
import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { ARTICLE } from 'src/app/models/article.model';
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { ParametreCamionPDA } from '../../../models/parametreCamionPDA.model';
import { BehaviorSubject } from 'rxjs';
import { BLLPDA } from 'src/app/models/bl_pda.model';
import { BLLigne } from 'src/app/models/bl_ligne.model';
import { AlertController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  client: any;
  selectedArticle = new ARTICLE();
  qte: number;
  total = 0;

  params: ParametreCamionPDA = {};
  pdaParams: SQLiteObject;

  new_bl: BLLPDA = {};
  bl_list: BLLPDA[] = [];
  bl_db: SQLiteObject;

  article_list = [];
  bl_ligne_list: BLLigne[] = [];


  isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
      private route: ActivatedRoute,
      public modalController: ModalController,
      private platform: Platform,
      private sqlite: SQLite,
      private httpClient: HttpClient,
      private sqlPorter: SQLitePorter,
      public alertController: AlertController
    ) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.client = JSON.parse(params.special);
        this.platform.ready().then(() => {
          this.sqlite.create({
            name: 'ParametreCamionPDA.db',
            location: 'default'
          })
            .then((db: SQLiteObject) => {
              this.pdaParams = db;
              this.getParamsData();

              this.sqlite.create({
                name: 'bl_pda.db',
                location: 'default'
              })
                .then((bldb: SQLiteObject) => {
                  this.bl_db = bldb;
                  this.getBlsData();
                });
            });
        });
      }
    });
    this.selectedArticle.REFERENCE = null;
    this.selectedArticle.PrixVTTC = null;
    this.selectedArticle.STOCK = null;
  }

  ngOnInit() { }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ListeProduitsComponent,
      cssClass: 'my-custom-class',
      showBackdrop: true,
      backdropDismiss: true,
      swipeToClose: true,
      componentProps: {
        openedAsModal: true,
      }
    });

    modal.onDidDismiss()
    .then((data) => {
      this.selectedArticle = data['data'].data;
      if(this.client.TARIF === 1){
        this.selectedArticle.PrixVTTC = this.selectedArticle.T1_PrixTTC;
        this.selectedArticle.PrixVHT = this.selectedArticle.T1_PrixHT;
      } else if(this.client.TARIF === 2){
        this.selectedArticle.PrixVTTC = this.selectedArticle.T2_PrixTTC;
        this.selectedArticle.PrixVHT = this.selectedArticle.T2_PrixHT;
      } else if(this.client.TARIF === 3){
        this.selectedArticle.PrixVTTC = this.selectedArticle.T3_PrixTTC;
        this.selectedArticle.PrixVHT = this.selectedArticle.T3_PrixHT;
      }
  });
    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Action incomplete',
      message: 'Merci de saisir la quantité du produit!.',
      buttons: ['OK']
    });

    await alert.present();
  }


  dbState() {
    return this.isDbReady.asObservable();
  }

  getParamsData() {
    this.httpClient.get(
      'assets/database/PARAMETRE_CAMION_PDA.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.pdaParams, data)
        .then(_ => {
          this.getParams();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  getParams() {
    return this.pdaParams.executeSql('SELECT * FROM [ParametreCamionPDA]', []).then(res => {
      if (res.rows.length > 0) {
        this.params = res.rows.item(0);
      }
    });
  }

  getBlsData() {
    this.httpClient.get(
      'assets/database/BL_PDA.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.bl_db, data)
        .then(_ => {
          this.getBls();
          this.isDbReady.next(true);
          this.createBL();
        })
        .catch(error => console.error(error));
    });
  }

  getBls() {
    return this.bl_db.executeSql('SELECT * FROM [BLPDA]', []).then(res => {
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.bl_list.push(res.rows.item(i));
        }
      }
      console.log(this.bl_list);
    });
  }

  createBL(){
    let bl_num = 1;

    /*if(this.bl[-1].BLNum){
       bl_num = parseInt(this.bl[-1].BLNum, 10) + 1;
    }*/

    this.new_bl.DocType = '2';
    this.new_bl.BLType = '100';
    this.new_bl.Date = new Date();
    this.new_bl.BLNum = bl_num.toString();
    this.new_bl.CodeClient = this.client.ID;
    this.new_bl.IdCamionPDA = this.params.CodeCamion;
    console.log(this.new_bl);

    /*return this.bl_db.executeSql('INSERT INTO [BLPDA] ([DocType], [BLType] , [Date], [BLNum], [CodeClient], [IdCamionPDA] ) VALUES (?, ?, ?, ?, ?, ?)', data)
    .then(res => {
      console.log(res);
      this.getBls();
    });*/
  }

  createBlLigne(){
    if(this.qte){
      let new_bl_ligne: BLLigne = {};
      new_bl_ligne.CodeArticle = this.selectedArticle.ID.toString();
      new_bl_ligne.IdCamionPDA = this.params.CodeCamion;
      new_bl_ligne.Quantiter = this.qte;
      new_bl_ligne.PrixHT = this.selectedArticle.PrixHT;
      new_bl_ligne.TVA = this.selectedArticle.TVA;
      new_bl_ligne.PrixTTC = this.selectedArticle.PrixVTTC;
      new_bl_ligne.Unite = this.selectedArticle.Unite;
      new_bl_ligne.BLType = '100';

      this.article_list.push({ARTICLE: this.selectedArticle.REFERENCE, Qte: this.qte, Prix: this.qte * this.selectedArticle.PrixVTTC });
      this.bl_ligne_list.push(new_bl_ligne);
      this.total += this.qte * this.selectedArticle.PrixVTTC;
      this.qte = null;
      console.log(this.bl_ligne_list);
    } else {
      this.presentAlert();
    }
  }

  deleteLBlLigne(j){
    this.bl_ligne_list.splice(j, 1);
    this.article_list.splice(j, 1);
  }

}
