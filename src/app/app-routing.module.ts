import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CompteComponent } from './compte/compte.component';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  // {path:'accueil', component:AccueilComponent},
  {path:'inscription', component: InscriptionComponent},
  {path:'reservation', component: ReservationComponent},
  {path:'compte', component: CompteComponent},
  {path:'connexion', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
