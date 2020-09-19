import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { Client } from '../inscription/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  basePath(): string{
    return environment.serverUrl;
  }

  saveClientToHolding(client: Client){
    return this.http.post(this.basePath+"/holdingClient", client);

  }

  getAllClientFromHolding(): Observable<any>{
    let response = this.http.get(this.basePath+"/listClient");// Remplacer le localhost par l'adresse du serveur
    return response;
  }

  getClientByEmail(email:String){
    let response = this.http.get(this.basePath+"/getUserByEmail/"+email);
    return response;
  }
}
