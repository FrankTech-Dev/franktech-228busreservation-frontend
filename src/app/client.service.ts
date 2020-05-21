import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { Client } from './inscription/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  saveClientToHolding(client: Client){
    return this.http.post("http://localhost:8090/228GetBus/holdingClient", client);

  }

  getAllClientFromHolding(): Observable<any>{
    let response = this.http.get("http://localhost:8090/228GetBus/listClient");// Remplacer le localhost par l'adresse du serveur
    return response;
  }

  getClientByEmail(email:String){
    let response = this.http.get("http://localhost:8090/228GetBus/getUserByEmail/"+email);
    return response;
  }
}
