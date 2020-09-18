import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators }   from '@angular/forms';
import { Client } from './client.model';
import { ClientService } from '../client.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

 form: FormGroup;
 errorMessage: string;


  constructor( private fb:FormBuilder, private clientService: ClientService, private authService: AuthService,
    private router: Router) {
    this.controleValidation();
  }

  ngOnInit() {

  }

  controleValidation(){
    this.form = this.fb.group({
      nom: ["",[Validators.required,Validators.pattern(/^[a-zA-Z]+([0-9a-zA-Z]){2,10}/)]],
      prenom: ["", [Validators.required, Validators.pattern(/^[a-zA-Z]+([0-9a-zA-Z]){2,}/)]],
      telephone: ["", [Validators.required, Validators.pattern(/^[2,9,7]+[0-9]{7}/)]],
      mail: ["", [Validators.required, Validators.pattern(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)]],
      password:['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]

    })
  }


  getInscription(){
    const mon_nom = this.form.get("nom").value;
    const mon_prenom = this.form.get("prenom").value;
    const mon_telephone = this.form.get("telephone").value;
    const mon_mail = this.form.get("mail").value;
    const password = this.form.get("password").value;

    let client = new Client(mon_nom,mon_prenom,mon_telephone, mon_mail);

    this.addClient(client);
    this.authService.createNewUser(mon_mail, password).then(
      () => {
        this.router.navigate(['/accueil']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );


  }

  addClient(client: Client): void{
    this.clientService.saveClientToHolding(client)
      .subscribe((response) => {
        //Enrégistré la reponse (client) sur le disk dur de l'utilisateur
         let client = response as Client;
         localStorage.setItem('user',JSON.stringify(client));
        console.log(' Reponse enrégistrement client',response); }
      );

  }
}
