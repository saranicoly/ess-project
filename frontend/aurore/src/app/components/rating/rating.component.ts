import { Component, Input } from '@angular/core';
import { ManegementService } from 'src/app/services/management/management.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent {

  constructor(private serviceMngt: ManegementService, private router: Router){
    //console.log(this.router.getCurrentNavigation().extras.state.accommodation); // should log out 'bar'
  }



  @Input() reservation_id!:string;
  @Input() accommodation_id!: string;
  stars!:number ;
  comment!:string;

  onChangeStars($event:number){
    this.stars = $event;
  }

  sendRating(){

    var data ={
      reservation_id:  this.reservation_id,
      accommodation_id: this.accommodation_id,
      stars: this.stars,
      comment: this.comment,
    }

    /*this.serviceMngt.sendRating(data).subscribe({
      next: (res:any)=>{
        console.log(res,'response')},
      error: (err:any)=>{
        console.log(err, 'error')
      }
    });*/

  }
}
