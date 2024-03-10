import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { ManegementService } from '../../services/management/management.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrl: './edit-booking.component.css'
})
export class EditBookingComponent implements OnInit{

registerForm: any = FormGroup;
name: any; // manda user name para o header
alert: any;
title: any;
link: any ;
disable: boolean = true;
rota: any;
id:any;

constructor(private fb: FormBuilder, private service: ManegementService,private route: ActivatedRoute){
  this.route.params.subscribe(params => {
    this.name = params['user'];
    this.id = params['id'];
    console.log(this.name, this.id);
  });

}
@ViewChild('popUp') popUp!: ElementRef;



ngOnInit(): void {

  this.registerForm = this.fb.group({
     checkin: ['', [Validators.required], this.dateCheckinValidator.bind(this)],
     checkout: ['', [Validators.required], this.dateCheckoutValidator.bind(this)],
  });

}

  totalemDias(ano: number, mes: number, dia: number){

    let total = (mes * 30) +  dia + (ano * 12 * 30);
    return total;

  }

  dateCheckinValidator(control: FormControl) {

    let today : any = new Date();

    let checkin = control.value.split('-');

    let checkout = this.registerForm.get('checkout').value
    checkout = checkout.split('-');

    today = this.totalemDias(today.getFullYear(),  today.getMonth() + 1,  today.getDate() );
    checkin =  this.totalemDias( Number(checkin[0]),  Number(checkin[1]),  Number(checkin[2]) );
    checkout = this.totalemDias(  Number(checkout [0]),   Number(checkout [1]),   Number(checkout [2]) );


    if (!control.value || isNaN(checkin)) {
      this.registerForm.get('checkin').setErrors({ 'invalidDate': true });
      return { invalidDate: true };
    }
    if(checkout && checkin >= checkout){
      this.registerForm.get('checkin').setErrors({ 'biggerCheckin': true });
      return { biggerCheckin: true };
    }
    if(checkin <= today){
      this.registerForm.get('checkin').setErrors({ 'invalidDate': true });
      return { invalidDate: true };
    }
    this.registerForm.get('checkin').setErrors({ 'valid': true });
    return null;
  }

  dateCheckoutValidator(control: FormControl) {


    console.log("Estou em checkout");

    let today : any = new Date();

    let checkout = control.value.split('-');

    let checkin = this.registerForm.get('checkin').value
    checkin = checkin.split('-');

    today = this.totalemDias(today.getFullYear(),  today.getMonth() + 1,  today.getDate() );
    checkin =  this.totalemDias( Number(checkin[0]),  Number(checkin[1]),  Number(checkin[2]) );
    checkout = this.totalemDias(  Number(checkout [0]),   Number(checkout [1]),   Number(checkout [2]) );

    console.log(today, checkin, checkout)

    if (!control.value || isNaN(checkout)) {
      this.registerForm.get('checkout').setErrors({ 'invalidDate': true });
      return { invalidDate: true };
    }
    if(checkin && checkin > checkout){
      console.log("ENTREI AQUI")
      this.registerForm.get('checkout').setErrors({ 'biggerCheckout': true });
      return { biggerCheckout: true };
    }
    if(checkout <= today){
      this.registerForm.get('checkout').setErrors({ 'invalidDate': true });
      return { invalidDate: true };
    }
    this.registerForm.get('checkout').setErrors({ 'valid': true });
    return null;

    }

  showPop(status: any){
    this.disable = false;

     if(status == 200){
      this.alert = "Sua reserva foi deletada com sucesso!"
      this.title = "Obrigada";
      this.link = '../../../assets/img/verificado.png';
      this.rota = '/'
     }
     else{
      this.alert = "Não foi possível editar sua reserva!"
      this.title = "Erro";
      this.link = '../../../assets/img/error.png';
      this.rota = '/'
     }

  }

  submitEdit(){

    let checkin = this.registerForm.get('checkin').value;
    let checkout = this.registerForm.get('checkout').value;
    let accommodation ="3cb5d4a0-df96-4a73-82bd-a6fdc91d1994";
    let reservation_id = "7aedea72-57a0-4dba-9e1b-68af6035f34a";

    const popUpElement = this.popUp.nativeElement as HTMLElement;
    this.title = "Um momento"
    this.alert = "Carregando informações"
    this.link = "../../../assets/img/carregando.png"
    popUpElement.style.visibility = 'visible';


      this.service.editReservation({
        id: reservation_id,
        checkin: checkin ,
        checkout: checkout,
        accommodation_id: accommodation,
        cliente_id: this.name
      }).subscribe((result)=>{
        this.showPop(result.status_code)
      })
    }
  }


