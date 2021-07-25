import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentesPage } from './ventes.page';

const routes: Routes = [
  {
    path: '',
    component: VentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentesPageRoutingModule {}
