import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/Accueil', icon: 'home' },
    {
      title: 'Produits',
      url: '/Produits/liste-produits',
      icon: 'albums',
      subPages: [
        { title: 'Liste des Produits', url: '/Produits/liste-produits' },
      ]
    },
    {
      title: 'Ventes',
      url: '/Ventes/bon-livraison',
      icon: 'cart',
      subPages: [
        { title: 'Bon de Livraison', url: '/Ventes/bon-livraison'},
        { title: 'Factures', url: '/Ventes/factures' },
        { title: 'Bon de Retour', url: '/Ventes/bon-retour' },
        { title: 'Bon de Commande', url: '/Ventes/bon-commande' },
        { title: 'Bon de Sortie', url: '/Ventes/bon-sortie' },
      ]
    },
    {
      title: 'Clients', url: '/Clients/liste-clients', icon: 'people',
      subPages: [
        { title: 'Liste des Clients', url: '/Clients/liste-clients' },
      ]
    },
    {
      title: 'Stock',
      url: '/Stock/bon-entree',
      icon: 'server',
      subPages: [
        { title: 'Bons d\'Entrées', url: '/Stock/bon-entree'},
        { title: 'Bon de Retour', url: '/Stock/bon-retour' },
        { title: 'Inventaire', url: '/Stock/inventaire' },
      ]
    },
    { title: 'Etats', url: '/Etats', icon: 'stats-chart' },
    { title: 'Reédition Documents', url: '/Reedition-documents', icon: 'create' },
    { title: 'Paramètres', url: '/Parametres', icon: 'settings' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']; <ion-icon name="settings"></ion-icon>
  constructor() { }
}
