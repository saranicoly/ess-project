import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ManegementService } from 'src/app/services/management/management.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() reserva: any;
  @Input() rota: any;
  @Input() rotaDel: any;
  rotaEdit: any;

  constructor(private router: Router, private service: ManegementService){}

  rotaChange(): void {
    if (this.reserva && this.rota) {
      const rotaEdit = `${this.rota}/${this.reserva.id}`;
      console.log("rota ID",rotaEdit)
      this.router.navigateByUrl(rotaEdit);
    }
  }

  deleteCard(){
    if(this.reserva && this.rotaDel){
      const url = `${this.rotaDel}/${this.reserva.id}/delete`

      console.log("URL FINAL",url);
      this.service.deleteId(url).subscribe((result)=>{
        console.log("resultado del:", result)
        if(result.status_code == 200) {
          alert('Reserva deletada com sucesso!');
          setTimeout(function() {
            location.reload();
          }, 1000);

        }
      });

    }
  }

}
