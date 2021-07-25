import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.page.html',
  styleUrls: ['./ventes.page.scss'],
})
export class VentesPage implements OnInit {

  public pageName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('id') === 'bon-livraison'){
      this.pageName = 'Bon de Livraison';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bon-commande'){
      this.pageName = 'Bon de Commande';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bon-retour'){
      this.pageName = 'Bon de Retour';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bon-sortie'){
      this.pageName = 'Bon de Sortie';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'factures'){
      this.pageName = 'Factures';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bl-create'){
      this.pageName = 'Nouveau Bon de Livraison';
    }
  }

}
