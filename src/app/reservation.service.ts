import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { Reservation } from './reservation';
import { Client } from './inscription/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  basePath(): string{
    return environment.serverUrl;
  }

  sendReservationToHolding(reservation: Reservation){
    return this.http.post(this.basePath+"/addReservation", reservation);

  }

  payementManuel(reservation: Reservation){
    return this.http.post(this.basePath+"/payementManuel", reservation);

  }



  getAllReservationForClient(client: Client): Observable<any>{
    let response = this.http.get(this.basePath+"/reservationByClient");// Remplacer le localhost par l'adresse du serveur
    return response;

  }
}
