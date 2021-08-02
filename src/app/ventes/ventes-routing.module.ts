import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBLComponent } from './bon-livraison/create-bl/create-bl.component';
import { CreateBrComponent } from './bon-retour/create-br/create-br.component';

import { VentesPage } from './ventes.page';

const routes: Routes = [
  {
    path: '',
    component: VentesPage
  },
  {
    path: '/bl-create',
    component: CreateBLComponent
  },
  {
    path: '/br-create',
    component: CreateBrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentesPageRoutingModule {}
