import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReeditionDocumentsPage } from './reedition-documents.page';

const routes: Routes = [
  {
    path: '',
    component: ReeditionDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReeditionDocumentsPageRoutingModule {}
