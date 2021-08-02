/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { BLLigne } from '../models/bl_ligne.model';
import { BLLPDA } from '../models/bl_pda.model';
import { ParametreCamionPDA } from '../models/parametreCamionPDA.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentesService {

  database: SQLiteObject;
  params: ParametreCamionPDA = {};
  db_bl_ligne_liste: BLLigne[] = [];
  bl_list: BLLPDA[] = [];

  isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'NextPDA.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.initiateParametreTable();
          this.initiateBlTable();
          this.initiateBlLigneTable();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  initiateParametreTable() {
    this.httpClient.get(
      'assets/database/PARAMETRE_CAMION_PDA.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.database, data)
        .then(_ => {
          this.database.executeSql('SELECT * FROM [ParametreCamionPDA]', []).then(res => {
            if (res.rows.length > 0) {
              this.params = res.rows.item(0);
            }
          });
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  initiateBlTable() {
    this.httpClient.get(
      'assets/database/BL_PDA.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.database, data)
        .then(_ => {
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  initiateBlLigneTable() {
    this.httpClient.get(
      'assets/database/BL_Ligne.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.database, data)
        .then(_ => {
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  getBls() {
    return this.database.executeSql('SELECT * FROM [BLPDA]', []).then(res => {
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.bl_list.push(res.rows.item(i));
        }
      }
      console.log(this.bl_list);
    });
  }

  getBlLignes() {
    return this.database.executeSql('SELECT * FROM [BLLigne]', []).then(res => {
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.db_bl_ligne_liste.push(res.rows.item(i));
        }
      }
      console.log(this.db_bl_ligne_liste);
    });
  }

  validate(bl, bl_ligne, totalHT, totalTTC) {
    let data = [bl.DocType, bl.BLType, bl.Date, bl.CodeClient, this.params.CodeCamion, totalHT, totalTTC];

    let num = (new Date().getFullYear()).toString().substring(2,3) + this.params.CodeCamion;

    switch (bl.DocType) {
      case '1':
        data.push( num + (this.params.Facture + 1) );
        this.database.executeSql('UPDATE [ParametreCamionPDA] SET [Facture] = ([Facture]  +1 ) WHERE [ID] = 1', []);
        break;
      case '2':
        data.push( num + (this.params.DernierNumBL + 1) );
        this.database.executeSql('UPDATE [ParametreCamionPDA] SET [DernierNumBL] = ([DernierNumBL]  +1 ) WHERE [ID] = 1', []);
        break;
      case '3':
        data.push( num + (this.params.Bonsortie + 1) );
        this.database.executeSql('UPDATE [ParametreCamionPDA] SET [Bonsortie] = ([Bonsortie]  +1 ) WHERE [ID] = 1', []);
        break;
      default:
        break;
    }

    this.database.executeSql('INSERT INTO [BLPDA] ([DocType], [BLType] ,[Date], [CodeClient], [IdCamionPDA], [MontantHT], [MontantTTC], [BLNum] ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', data)
      .then(() => {
        bl_ligne.forEach(e => {
          console.log(data[7]);
          let ligne = [e.CodeArticle, this.params.CodeCamion, e.Quantiter, e.PrixHT, e.TVA, e.PrixTTC, e.Unite, bl.BLType, data[7]];
          this.database.executeSql('INSERT INTO [BLLigne] ([CodeArticle], [IdCamionPDA], [Quantiter], [PrixHT], [TVA], [PrixTTC], [Unite], [BLType], [BLNum] ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ', ligne)
            .then(() => {
              this.database.executeSql('UPDATE [ARTICLE] SET [STOCK] = ([STOCK]  - ?) WHERE [ID] = ?', [e.Quantiter, e.CodeArticle]);
              this.getBlLignes();
            });
        });
      });
  }


}
