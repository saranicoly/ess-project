

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {EditBookingComponent} from './view/edit-booking/edit-booking.component'
import { ListReservationComponent} from './view/list-reservation/list-reservation.component'
import {ListAccomodationComponent} from './view/list-accomodation/list-accomodation.component'
import {HistoricMainComponent } from './view/historic-main/historic-main.component'
import {LoginComponent} from './view/login/login.component'

const routes: Routes = [
  { path: '', component:   LoginComponent },
  {path: 'listAc/:user', component:ListAccomodationComponent},
  {path: 'listRs/:user', component:ListReservationComponent},
  {path:'listRs/:user/historic', component: HistoricMainComponent},
  {path: 'listRs/:user/editRs/:id', component: EditBookingComponent }
];
///listRs/${this.name}/editRs/${dados.detail.id}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
