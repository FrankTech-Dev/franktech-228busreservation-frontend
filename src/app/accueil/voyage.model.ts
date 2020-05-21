export class Voyage {

  public nomAgence : string;
  public  lieuDepart : string;
  public lieuArrive : string;
  public dateDepart : string;
  public heureDepart : string;
  public placeRestante : number;
  public prixVoyage : string;

  constructor(nomAgence:string, lieuDepart:string, lieuArrive:string, dateDepart:string,
    heureDepart:string, placeRestante:number, prixVoyage:string) {

        this.nomAgence = nomAgence;
        this.lieuDepart = lieuDepart;
        this.lieuArrive = lieuArrive;
        this.dateDepart = dateDepart;
        this.heureDepart = heureDepart;
        this.placeRestante = placeRestante;
        this.prixVoyage = prixVoyage;
}
} 

// import {Injectable} from '@angular/core';
// import {Voyage} from '../voyage.model'

//   @Injectable({
//   providedIn:'root'
// })

// export class voyageService {
//   public place : number
//   constructor(private _voyageService: voyageService, place: number) {
//     this.place = place
//   }
  
//   getPlaceRestante(){
//     let voyage =  new Voyage("","","","","",0, "");
//      let voyage_p : number 
//       voyage_p = voyage.placeRestante
//       voyage_p = this._voyageService.place;
//       return voyage_p;
//     }

  // }