import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Client } from '../inscription/client.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connect : FormGroup
  client:Client;

  constructor(private fb:FormBuilder, private authService: AuthService, private router: Router, private clientService:ClientService) {
    this.controleConnexion();
   }

  ngOnInit() {

  }

  controleConnexion(){
    this.connect = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  seConnecter(){
    const mail = this.connect.get("email").value;
    const pass = this.connect.get("password").value;
    console.log("mail111", mail);
    console.log("pass1111", pass);
    this.authService.signInUser(mail,pass).then((value)=>{
      this.getClientByEmail(mail);
    });


    this.router.navigate(['/accueil']);

  }

  getClientByEmail(email:string): Client{
    this.clientService.getClientByEmail(email).subscribe((response)=>{
      this.client = response as Client;
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(response));
    });
    return this.client;

  }

}
