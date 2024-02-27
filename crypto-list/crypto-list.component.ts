// crypto-list.component.ts

import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {
  cryptos: any[] = [];

  constructor(private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getCryptos();
  }

  getCryptos(): void {
    this.cryptoService.getCryptos()
      .subscribe((data: any[]) => {
        this.cryptos = data.slice(0, 10); // Limita para as duas primeiras moedas
      });
  }
}


