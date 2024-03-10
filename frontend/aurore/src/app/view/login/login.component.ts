import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  name: any= "pedro123";

  constructor(private router: Router){}

  next(){
    this.router.navigateByUrl(`/listRs/${this.name}`);
  }
}
