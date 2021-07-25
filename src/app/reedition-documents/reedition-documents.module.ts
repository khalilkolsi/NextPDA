import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReeditionDocumentsPageRoutingModule } from './reedition-documents-routing.module';

import { ReeditionDocumentsPage } from './reedition-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReeditionDocumentsPageRoutingModule
  ],
  declarations: [ReeditionDocumentsPage]
})
export class ReeditionDocumentsPageModule {}
