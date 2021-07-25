import { CreateComponent } from './bon-livraison/create/create.component';
import { FacturesComponent } from './factures/factures.component';
import { BonSortieComponent } from './bon-sortie/bon-sortie.component';
import { BonRetourComponent } from './bon-retour/bon-retour.component';
import { BonLivraisonComponent } from './bon-livraison/bon-livraison.component';
import { BonCommandeComponent } from './bon-commande/bon-commande.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentesPageRoutingModule } from './ventes-routing.module';

import { VentesPage } from './ventes.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentesPageRoutingModule,
  ],
  declarations: [
    VentesPage,
    BonCommandeComponent,
    BonLivraisonComponent,
    BonRetourComponent,
    BonSortieComponent,
    FacturesComponent,
    CreateComponent
  ]
})
export class VentesPageModule {}
