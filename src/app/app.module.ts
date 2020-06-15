import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {ContactService} from './services/contact.service';
import {UserService} from './services/user.service';
import {BitcoinService} from './services/bitcoin.service';
import {StorageService} from './services/storage.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { MyCounter } from './counter/counter.component';
import { Friends } from './friends/friends.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactEditComponent } from './cmps/contact-edit/contact-edit.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './cmps/moves-list/moves-list.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NavbarComponent } from './cmps/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    MyCounter,
    Friends,
    ContactDetailsPageComponent,
    ContactPageComponent,
    LoginComponent,
    HomeComponent,
    ContactEditComponent,
    TransferFundComponent,
    MovesListComponent,
    ChartsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule
  ],
  providers: [ContactService, UserService, BitcoinService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
