import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Accueil',
    pathMatch: 'full'
  },
  {
    path: 'Accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'Ventes/:id',
    loadChildren: () => import('./ventes/ventes.module').then( m => m.VentesPageModule)
  },
  {
    path: 'Stock/:id',
    loadChildren: () => import('./stock/stock.module').then( m => m.StockPageModule)
  },
  {
    path: 'Etats',
    loadChildren: () => import('./etats/etats.module').then( m => m.EtatsPageModule)
  },
  {
    path: 'Parametres',
    loadChildren: () => import('./parametres/parametres.module').then( m => m.ParametresPageModule)
  },
  {
    path: 'Produits/:id',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'Clients/:id',
    loadChildren: () => import('./clients/clients.module').then( m => m.ClientsPageModule)
  },
  {
    path: 'Reedition-documents',
    loadChildren: () => import('./reedition-documents/reedition-documents.module').then( m => m.ReeditionDocumentsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
