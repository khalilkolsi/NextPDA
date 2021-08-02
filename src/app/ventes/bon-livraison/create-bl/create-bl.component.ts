/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/naming-convention */

import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController, AlertController  } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { ListeProduitsComponent } from '../../../produits/liste-produits/liste-produits.component';

import { BLLPDA } from 'src/app/models/bl_pda.model';
import { BLLigne } from 'src/app/models/bl_ligne.model';
import { ARTICLE } from 'src/app/models/article.model';

import { VentesService } from '../../ventes.service';



@Component({
  selector: 'app-create-bl',
  templateUrl: './create-bl.component.html',
  styleUrls: ['./create-bl.component.scss'],
})
export class CreateBLComponent implements OnInit {

  client: any;
  selectedArticle = new ARTICLE();
  qte: number;

  totalTTC = 0;
  totalHT = 0;



  new_bl: BLLPDA = {};

  article_list = [];
  bl_ligne_list: BLLigne[] = [];

  isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
      private route: ActivatedRoute,
      public modalController: ModalController,
      public alertController: AlertController,
      private router: Router,
      public toastController: ToastController,
      private service: VentesService
    ) {

    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.client = JSON.parse(params.special);
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bon de Livraison Créé',
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

  createBL(){
    let bl_num = 0;
    bl_num ++;

    this.new_bl.DocType = '2';
    this.new_bl.BLType = '100';
    this.new_bl.Date = new Date();
    this.new_bl.BLNum = bl_num.toString();
    this.new_bl.CodeClient = this.client.ID;
    console.log(this.new_bl);

  }

  createBlLigne(){
    if(this.qte){
      let new_bl_ligne: BLLigne = {};
      new_bl_ligne.CodeArticle = this.selectedArticle.ID.toString();
      new_bl_ligne.Quantiter = this.qte;
      new_bl_ligne.PrixHT = this.selectedArticle.PrixHT;
      new_bl_ligne.TVA = this.selectedArticle.TVA;
      new_bl_ligne.PrixTTC = this.selectedArticle.PrixVTTC;
      new_bl_ligne.Unite = this.selectedArticle.Unite;
      new_bl_ligne.BLType = '1';

      this.article_list.push({ARTICLE: this.selectedArticle.REFERENCE, Qte: this.qte, Prix: this.qte * this.selectedArticle.PrixVTTC });
      this.bl_ligne_list.push(new_bl_ligne);
      this.totalTTC += this.qte * this.selectedArticle.PrixVTTC;
      this.totalHT += this.qte * this.selectedArticle.PrixVHT;
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

  validate() {
    this.createBL();
    this.service.validate(this.new_bl, this.bl_ligne_list, this.totalHT, this.totalTTC);
    this.service.getBls();
    this.service.getBlLignes();
    this.router.navigate(['/Ventes/bon-livraison']);
    this.presentToast();
  }

}
