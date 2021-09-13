import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pruebaBootstrap';
  data: Array<any>;

  constructor() {
    this.data = [
      { position: 20, name: 'calsio', weight: 40.078, symbol: 'ca' },
      { position: 21, name: 'escandio', weight: 44.955, symbol: 'sc' },
      { position: 22, name: 'titanio', weight: 47.867, symbol: 'ti' },
      { position: 23, name: 'vanadio', weight: 50.9415, symbol: 'v' },
      { position: 24, name: 'cromo', weight: 51.9961, symbol: 'cr' },
      { position: 25, name: 'magnesio', weight: 54.9380, symbol: 'mn' },
      { position: 26, name: 'hierro', weight: 55.845, symbol: 'fe' },
      { position: 27, name: 'cobalto', weight: 58.9331, symbol: 'co' },
      { position: 28, name: 'niquel', weight: 58.6934, symbol: 'ni' },
      { position: 29, name: 'cobre', weight: 63.546, symbol: 'cu' },

    ]
  }
}