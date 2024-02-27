// crypto-list.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoListComponent } from './crypto-list.component';
import { CryptoService } from '../crypto.service';
import { of } from 'rxjs';

describe('CryptoListComponent', () => {
  let component: CryptoListComponent;
  let fixture: ComponentFixture<CryptoListComponent>;
  let cryptoServiceSpy: jasmine.SpyObj<CryptoService>;

  beforeEach(async () => {
    // Criar um SpyObj para o CryptoService
    const spy = jasmine.createSpyObj('CryptoService', ['getCryptos']);

    await TestBed.configureTestingModule({
      declarations: [ CryptoListComponent ],
      providers: [
        { provide: CryptoService, useValue: spy }
      ]
    })
    .compileComponents();

    cryptoServiceSpy = TestBed.inject(CryptoService) as jasmine.SpyObj<CryptoService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getCryptos on init', () => {
    const mockCryptos = [
      { name: 'Bitcoin', symbol: 'BTC', current_price: 45000 },
      { name: 'Ethereum', symbol: 'ETH', current_price: 1800 }
    ];

    cryptoServiceSpy.getCryptos.and.returnValue(of(mockCryptos));

    component.ngOnInit();

    expect(cryptoServiceSpy.getCryptos).toHaveBeenCalled();
    expect(component.cryptos.length).toEqual(2); // Verifica se há apenas duas moedas
    expect(component.cryptos).toEqual(mockCryptos); // Verifica se as moedas retornadas são as esperadas
  });
});
