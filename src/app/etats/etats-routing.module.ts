import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtatsPage } from './etats.page';

const routes: Routes = [
  {
    path: '',
    component: EtatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtatsPageRoutingModule {}
