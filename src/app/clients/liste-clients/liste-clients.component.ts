/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
import { SQLite } from '@ionic-native/sqlite/ngx';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { CLIENT } from 'src/app/models/client.model';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.scss'],
})
export class ListeClientsComponent implements OnInit {

  search: string;
  items: CLIENT[] = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  search_items: CLIENT[] = [];
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'article.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getData();
        });
    });
  }

  ngOnInit() { }

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
          this.items.push({
            Societe: res.rows.item(i).Societe,
            Responsable: res.rows.item(i).Responsable,
            Telefon: res.rows.item(i).T1_PrixTTC,
            x: res.rows.item(i).x,
          });
        }
      }
      console.log(this.items);
      this.search_items =  this.items;
    });
  }

  getClient(search: string) {
    // eslint-disable-next-line prefer-const
    let result: CLIENT[] = [];
    // eslint-disable-next-line max-len
    if(search === '' || search === null){
      this.items = this.search_items;
    } else {
      this.search_items.forEach(e => {
        if ( e.Societe.toUpperCase().includes(search.toUpperCase()) || e.Responsable.toUpperCase().includes(search.toUpperCase()) ) {
          result.push(e);
          this.items = result;
        }
      });
    }
  }

  cancel(){
    this.items = this.search_items;
  }
}
