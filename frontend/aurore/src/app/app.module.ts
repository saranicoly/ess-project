import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './app.routing.module';// Import RouterModule
import { HttpClientModule } from '@angular/common/http';

import {HistoricComponent} from './components/list/historic/historic.component'
import {InputHistoricComponent} from './components/list/input-historic/input-historic.component'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BotaoComponent} from './components/assets/botao-comun/botao.component'
import {EditBookingComponent} from './view/edit-booking/edit-booking.component'
import {HeaderComumComponent} from './components/headers/header-comum/header-comum.component'
import { ListReservationComponent} from './view/list-reservation/list-reservation.component'
import {ListAccomodationComponent} from './view/list-accomodation/list-accomodation.component'
import {CardComponent } from './components/card/card.component'
import {ListCardComponent} from './components/list-card/list-card.component'
import { HistoricMainComponent } from './view/historic-main/historic-main.component'
import {LoginComponent} from './view/login/login.component'
@NgModule({
  declarations: [
    AppComponent,
    HistoricComponent,
    InputHistoricComponent,
    BotaoComponent,
    EditBookingComponent,
    HeaderComumComponent,
    ListReservationComponent,
    ListAccomodationComponent,
    CardComponent,
    ListCardComponent,
    HistoricMainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
