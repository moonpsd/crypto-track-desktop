// currency.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl = 'https://api.exchangeratesapi.io/latest';

  constructor(private http: HttpClient) { }

  getConversionRate(): Observable<any> {
    const url = `${this.baseUrl}?base=USD&symbols=BRL`;

    return this.http.get(url);
  }
}
