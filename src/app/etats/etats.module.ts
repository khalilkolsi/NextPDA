import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtatsPageRoutingModule } from './etats-routing.module';

import { EtatsPage } from './etats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtatsPageRoutingModule
  ],
  declarations: [EtatsPage]
})
export class EtatsPageModule {}
