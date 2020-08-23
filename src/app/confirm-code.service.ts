import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCodeService {

  constructor(private http: HttpClient) { }

  basePath(): string{
    return environment.serverUrl;
  }

  sendConfirmCode(code: number){
    return this.http.post(this.basePath+"/confirmCode", code);

  }


}
