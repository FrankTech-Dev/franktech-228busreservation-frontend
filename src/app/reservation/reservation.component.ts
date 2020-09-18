import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TransfertDataService } from '../transfert-data.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  myForm: FormGroup;
  private identifiant;
  constructor(private route:ActivatedRoute,private reservationServ: ReservationService,private fb:FormBuilder, private router: Router, private transfertData:TransfertDataService) {
    this.controleValidation();
   }


   ngOnInit() {
     let id = this.route.snapshot.paramMap.get('idVoyage');
     this.identifiant = id;
   }

  controleValidation(){
    this.myForm = this.fb.group({
      nbPassagers: ["",[Validators.required,Validators.pattern(/^[a-zA-Z]+([0-9a-zA-Z]){2,10}/)]],
      passagers: ["", [Validators.required, Validators.pattern(/^[a-zA-Z]+([0-9a-zA-Z]){2,}/)]],
      telephone: ["", [Validators.required, Validators.pattern(/^[2,9,7]+[0-9]{7}/)]],
      moyenDePayement: [""]

    })
  }

  onSubmit(){
    const nbPassagers = this.myForm.get("nbPassagers").value;
    const passagers = this.myForm.get("passagers").value;
    const moyenDePayement = this.myForm.get("moyenDePayement").value;
    const telephone = this.myForm.get("telephone").value;
    let reservation = new Reservation(this.identifiant,nbPassagers, passagers, moyenDePayement, telephone);
    this.transfertData.setData(reservation);
    this.router.navigate(['/reservation-view']);
  }

}
