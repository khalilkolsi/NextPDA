/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/naming-convention */

import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, ToastController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject } from 'rxjs';

import { ListeProduitsComponent } from '../../../produits/liste-produits/liste-produits.component';

import { ARTICLE } from 'src/app/models/article.model';


@Component({
  selector: 'app-create-br',
  templateUrl: './create-br.component.html',
  styleUrls: ['./create-br.component.scss'],
})
export class CreateBrComponent implements OnInit {

  client: any;
  selectedArticle = new ARTICLE();
  qte: number;

  totalTTC = 0;
  totalHT = 0;

  database: SQLiteObject;

  article_list = [];

  isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private route: ActivatedRoute,
    public modalController: ModalController,
    private platform: Platform,
    private sqlite: SQLite,
    public alertController: AlertController,
    private router: Router,
    public toastController: ToastController
  ) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.client = JSON.parse(params.special);

        this.platform.ready().then(() => {
          this.sqlite.create({
            name: 'NextPDA.db',
            location: 'default'
          })
            .then((db: SQLiteObject) => {
              this.database = db;
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
        if (this.client.TARIF === 1) {
          this.selectedArticle.PrixVTTC = this.selectedArticle.T1_PrixTTC;
          this.selectedArticle.PrixVHT = this.selectedArticle.T1_PrixHT;
        } else if (this.client.TARIF === 2) {
          this.selectedArticle.PrixVTTC = this.selectedArticle.T2_PrixTTC;
          this.selectedArticle.PrixVHT = this.selectedArticle.T2_PrixHT;
        } else if (this.client.TARIF === 3) {
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bon de Retour effectué',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }


  dbState() {
    return this.isDbReady.asObservable();
  }

  createBsLigne() {
    this.article_list.push({
      ID: this.selectedArticle.ID,
      ARTICLE: this.selectedArticle.ARTICLE,
      Qte: this.qte,
      Prix: this.selectedArticle.PrixVTTC * this.qte
    });
    this.totalTTC += this.selectedArticle.PrixVTTC * this.qte;
  }

  deleteLBsLigne(j){
    this.article_list.splice(j, 1);
  }


  validate() {
    this.article_list.forEach(e => {
      this.database.executeSql('UPDATE [ARTICLE] SET [STOCK] = ([STOCK]  + ?) WHERE [ID] = ?', [e.Qte, e.ID])
      .then(() => {});
    });

    this.router.navigate(['/Ventes/bon-retour']);
    this.presentToast();
  }

}
