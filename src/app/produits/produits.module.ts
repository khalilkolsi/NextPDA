import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsPageRoutingModule } from './produits-routing.module';

import { ProduitsPage } from './produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsPageRoutingModule
  ],
  declarations: [
    ProduitsPage,
    ListeProduitsComponent
  ]
})
export class ProduitsPageModule {}
