import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCodeService {

  constructor(private http: HttpClient) { }

  sendConfirmCode(code: number){
    return this.http.post("http://localhost:8090/228GetBus/confirmCode", code);

  }


}
