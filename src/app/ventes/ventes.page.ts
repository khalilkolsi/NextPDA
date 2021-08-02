/* eslint-disable @typescript-eslint/naming-convention */
import { CLIENT } from './../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.page.html',
  styleUrls: ['./ventes.page.scss'],
})
export class VentesPage implements OnInit {

  public pageName: string;

  client_list: CLIENT[] = [];
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private activatedRoute: ActivatedRoute,
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'NextPDA.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          console.log(db);
          this.storage = db;
          this.getData();
        });
    });
   }

  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('id') === 'bon-livraison'){
      this.pageName = 'Bon de Livraison';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bon-commande'){
      this.pageName = 'Bon de Commande';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bon-retour'){
      this.pageName = 'Bon de Retour';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bon-sortie'){
      this.pageName = 'Bon de Sortie';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'factures'){
      this.pageName = 'Factures';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bl-create'){
      this.pageName = 'Nouveau Bon de Livraison';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'br-create'){
      this.pageName = 'Nouveau Bon de Retour';
    }
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  getData() {
    this.httpClient.get(
      'assets/database/CLIENT.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getClients();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // Get list
  getClients() {
    return this.storage.executeSql('SELECT * FROM [CLIENT]', []).then(res => {
      // eslint-disable-next-line prefer-const
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.client_list.push(res.rows.item(i));
        }
      }
      console.log(this.client_list);
    });
  }


}
