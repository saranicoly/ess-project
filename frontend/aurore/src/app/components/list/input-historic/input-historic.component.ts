import { Component , EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-input-historic',
  templateUrl: './input-historic.component.html',
  styleUrls: ['./input-historic.component.css']
})
export class InputHistoricComponent {
 
  checkInControl = new FormControl('', Validators.required);
  checkOutControl = new FormControl('', Validators.required);

  @Output() formSubmitted = new EventEmitter<{checkIn: string, checkOut: string, id: string}>();


  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'Este campo é obrigatório*';
    }
    return '';
  }

  showList(){

   /*
    checkin: "2024-01-02",
    checkout: "2024-03-01"
  */
    if (this.checkInControl.valid && this.checkOutControl.valid) {
      console.log(this.checkInControl, this.checkOutControl);
     const checkInValue = this.checkInControl.value ?? ''; 
     const checkOutValue = this.checkOutControl.value ?? ''; 
      console.log(checkInValue, checkOutValue)
      this.formSubmitted.emit({checkIn: checkInValue, checkOut: checkOutValue, id: "pedro123"});
    }
  }
}
