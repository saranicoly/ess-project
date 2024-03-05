import { Component, OnInit } from '@angular/core';
import {ManegementService} from '../services/management/management.service'

@Component({
  selector: 'app-booking-mngt',
  templateUrl: './booking-mngt.component.html',
  styleUrls: ['./booking-mngt.component.css']
})
export class BookingMngtComponent implements OnInit{
  constructor(private serviceMngt: ManegementService){}

  ngOnInit(): void {
    
      this.serviceMngt.getList().subscribe((dados:any)=>{
        console.log(dados);
      });
  }
}
