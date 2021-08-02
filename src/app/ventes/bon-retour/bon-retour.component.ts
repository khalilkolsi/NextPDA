import { CLIENT } from './../../models/client.model';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bon-retour',
  templateUrl: './bon-retour.component.html',
  styleUrls: ['./bon-retour.component.scss'],
})
export class BonRetourComponent implements OnInit {

  @Input() clients: CLIENT[];

  constructor(private router: Router) { }

  ngOnInit() {}

  createBR(client) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(client)
      }
    };
    this.router.navigate(['/Ventes/br-create'], navigationExtras);
  }

}
