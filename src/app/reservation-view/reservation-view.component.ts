import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TransfertDataService } from '../services/transfert-data.service';
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../model/voyage';
import { Reservation } from '../model/reservation';
import { Client } from '../inscription/client.model';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.component.html',
  styleUrls: ['./reservation-view.component.css']
})
export class ReservationViewComponent implements OnInit {
  data ;
  voyage:Voyage;
  reservation: Reservation;
  prixTotal:number;
  prixTotalTTC: number;
  constructor(private route:ActivatedRoute,private router:Router, private transfertData:TransfertDataService, private voyageService: VoyageService, private reservationService: ReservationService) {
    //
   }

  ngOnInit() {
   /* this.data = this.transfertData.getData();
    if(this.data){

      this.reservation = this.data as Reservation;
      console.log('reservation recuperer: '+this.reservation.identifiantVoyage);
     this.getVoyageByIdentifiant(this.reservation.identifiantVoyage);
     //console.log('voyage ->'+this.voyage.dateVoyage+', prix: '+this.voyage.prixVoyage);

     //this.prixTotal = this.reservation.nbPassager * this.voyage.prixVoyage;
     //this.prixTotalTTC = this.prixTotal + (this.prixTotal*this.voyage.frais)/100;
     //console.log('total ttc: '+this.prixTotalTTC);

    }else{
      console.log("ERREUR / reservation null");
      this.router.navigate(['/accueil']);
    }*/

  }

  onSubmit(){
    // Portail de payement
    // si le payement a reussi alors envoi des données de la reservation au backend
   /* let client = JSON.parse(localStorage.getItem('user')) as Client;
    this.reservation.idClient = client.idClient;
    console.log('idClient ->'+this.reservation.idClient);
    this.sendReservationToHolding(this.reservation);
    this.router.navigate(['/accueil']);*/
  }

  getVoyageByIdentifiant(identifiant:string): Voyage{
    /*this.voyageService.getVoyageByIdentifiant(identifiant)
    .subscribe((response)=>{
      this.voyage = response as Voyage;
      console.log('Response ->'+response);
      console.log('voyage ->'+this.voyage.dateVoyage+', prix: '+this.voyage.prixVoyage);
    });*/
    return null;//this.voyage;
  }

  sendReservationToHolding(reservation: Reservation){
    /*this.reservationService.sendReservationToHolding(reservation)
    .subscribe((response) =>{
      let reservations = response as Reservation;
      window.alert("Réservation Reussie, le N° du ticket est:"+reservations.reference+"  \n  C'est envoyé également dans votre boîte mail. merci")
      console.log(' reponse du holding: '+reservations);
    })*/
  }

  payementManuel(reservation: Reservation): void{
    /*this.reservationService.payementManuel(reservation)
    .subscribe((response)=>{
      let res = response as Reservation;
      window.alert("Votre demande est encours de traitement. \nAprès vérification un mail vous sera envoyé contenant le N° du Ticket. Merci")
    })*/
  }

}
