import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Verify } from './Verify';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) { }

  basePath(): string{
    return environment.serverUrl;
  }

  sendPhoneCheckCode(verify: Verify){
    return this.http.post(this.basePath+"/phone-verification/sendClientCode", verify);
  }
}
