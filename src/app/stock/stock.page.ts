import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  pageName: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.activatedRoute.snapshot.paramMap.get('id') === 'bon_entree'){
      this.pageName = 'Bon d\'Entrée';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'inventaire'){
      this.pageName = 'Inventaire';
    } else if (this.activatedRoute.snapshot.paramMap.get('id') === 'bon_retour'){
      this.pageName = 'Bon de Retour';
    }
  }

}
