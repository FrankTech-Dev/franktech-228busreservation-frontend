import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { Reservation } from './reservation';
import { Client } from './inscription/client.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  sendReservationToHolding(reservation: Reservation){
    return this.http.post("http://localhost:8090/228GetBus/addReservation", reservation);

  }

  payementManuel(reservation: Reservation){
    return this.http.post("http://localhost:8090/228GetBus/payementManuel", reservation);

  }



  getAllReservationForClient(client: Client): Observable<any>{
    let response = this.http.get("http://localhost:8090/228GetBus/reservationByClient");// Remplacer le localhost par l'adresse du serveur
    return response;

  }
}
