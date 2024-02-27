// crypto.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private baseUrl = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) { }

  getCryptos(): Observable<any> {
    const url = `${this.baseUrl}/coins/markets?vs_currency=usd`;

    return this.http.get(url);
  }
}
