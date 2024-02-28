import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { ModelosComponent } from './modelos/modelos.component';
import { AccountComponent } from './account/account.component';
import { CryptoListComponent} from '../crypto-list/crypto-list.component';
import { ContactComponent } from 'src/contact/contact.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'modelos', component: ModelosComponent},
  {path: 'account', component: AccountComponent},
  {path: 'coins', component: CryptoListComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
