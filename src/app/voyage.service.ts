import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private http: HttpClient) { }

  getAllVoyageFromHolding(): Observable<any>{
    let response = this.http.get("http://localhost:8090/228GetBus/listVoyage");// Remplacer le localhost par l'adresse du serveur
    return response;
  }

  getVoyageByIdentifiant(identifiant: string){
    let response = this.http.get("http://localhost:8090/228GetBus/getVoyageByIdentifiant/"+identifiant);// Remplacer le localhost par l'adresse du serveur
    return response;
  }
}
