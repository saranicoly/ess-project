import { Component } from '@angular/core';
import {ManegementService} from '../../services/management/management.service'

@Component({
  selector: 'app-historic-main',
  templateUrl: './historic-main.component.html',
  styleUrl: './historic-main.component.css'
})
export class HistoricMainComponent {

  constructor(private serviceMngt: ManegementService){}

  historicData: any;

  ngOnInit(): void {

  }

  onFormSubmitted(formData: { checkIn: string, checkOut: string }) {
    this.historicData = formData;
  }

}
