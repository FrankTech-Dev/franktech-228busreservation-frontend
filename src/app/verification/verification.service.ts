import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Verify } from './Verify';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) { }

  sendPhoneCheckCode(verify: Verify){
    return this.http.post("http://localhost:8090/228GetBus/phone-verification/sendClientCode", verify);
  }
}
