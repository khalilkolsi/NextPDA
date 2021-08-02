/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CLIENT } from 'src/app/models/client.model';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bon-livraison',
  templateUrl: './bon-livraison.component.html',
  styleUrls: ['./bon-livraison.component.scss'],
})
export class BonLivraisonComponent implements OnInit {

  @Input() clients: CLIENT[];

  search: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  search_items: CLIENT[] = [];

  constructor(private router: Router) { }

  ngOnInit() { }

  cancel(){
    this.clients = this.search_items;
  }

  createBL(client) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(client)
      }
    };
    this.router.navigate(['/Ventes/bl-create'], navigationExtras);
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy() {
    this.clients = [];
  }
}
