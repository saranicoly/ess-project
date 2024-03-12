

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {EditBookingComponent} from './view/edit-booking/edit-booking.component'
import { ListReservationComponent} from './view/list-reservation/list-reservation.component'
import {ListAccomodationComponent} from './view/list-accomodation/list-accomodation.component'
import {HistoricMainComponent } from './view/historic-main/historic-main.component'
import {LoginComponent} from './view/login/login.component'
import {EditAccommodationComponent} from './view/edit-accommodation/edit-accommodation.component'
import {RatingComponent} from './components/rating/rating.component'

const routes: Routes = [
  { path: '', component:   LoginComponent },
  {path: 'listAc/:user', component:ListAccomodationComponent},
  {path: 'listRs/:user', component:ListReservationComponent},
  {path:'listRs/:user/historic', component: HistoricMainComponent},
  {path: 'listRs/:user/editRs/:id', component: EditBookingComponent },
  {path: 'listAc/:user/editAc/:id', component: EditAccommodationComponent},
  {path: 'listRs/:user/historic/:id', component: RatingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
