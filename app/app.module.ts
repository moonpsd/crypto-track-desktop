import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CryptoListComponent } from '../crypto-list/crypto-list.component';
import { CryptoService } from '../crypto.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModelosComponent } from './modelos/modelos.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from 'src/contact/contact.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ModelosComponent,
    PesquisaComponent,
    AccountComponent,
    AppComponent,
    CryptoListComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})


export class AppModule { }
