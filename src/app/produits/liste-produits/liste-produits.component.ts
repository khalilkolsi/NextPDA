/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
import { SQLite } from '@ionic-native/sqlite/ngx';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { ModalController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { ARTICLE } from 'src/app/models/article.model';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss'],
})
export class ListeProduitsComponent implements OnInit {

  @Input() openedAsModal: boolean;

  search: string;
  items: ARTICLE[] = [];
  search_items: ARTICLE[] = [];
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
    public modalController: ModalController
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'NextPDA.db',
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
      'assets/database/ARTICLE.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getArticles();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  // Get list
  getArticles() {
    return this.storage.executeSql('SELECT * FROM [ARTICLE]', []).then(res => {
      // eslint-disable-next-line prefer-const
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          this.items.push(res.rows.item(i));
        }
      }

      this.search_items =  this.items;
    });
  }

  getArticle(search: string) {
    let result: ARTICLE[] = [];
    // eslint-disable-next-line max-len
    if(search === '' || search === null){
      this.items = this.search_items;
    } else {
      this.search_items.forEach(e => {
        if ( e.ARTICLE.toUpperCase().includes(search.toUpperCase()) || e.REFERENCE.toUpperCase().includes(search.toUpperCase()) ) {
          result.push(e);
          this.items = result;
        }
      });
    }
  }

  cancel(){
    this.items = this.search_items;
  }

  selectProduit(i){
    if(this.openedAsModal === true){
      this.modalController.dismiss({
        dismissed: true,
        data: i
      });
    }
  }
}
