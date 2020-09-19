import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {


  constructor(private http: HttpClient) { }

  basePath(): string{
    return environment.serverUrl;
  }

  getAllVoyageFromHolding(): Observable<any>{
    let response = this.http.get(this.basePath+"/listVoyage");// Remplacer le localhost par l'adresse du serveur
    return response;
  }

  getVoyageByIdentifiant(identifiant: string){
    let response = this.http.get(this.basePath+"/getVoyageByIdentifiant/"+identifiant);// Remplacer le localhost par l'adresse du serveur
    return response;
  }
}
