import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CompteComponent } from './compte/compte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Voyage } from './accueil/voyage.model';
import {NgxPaginationModule} from 'ngx-pagination';
import { VoyageService } from './voyage.service';
import { ClientService } from './client.service';
import { ReservationService } from './reservation.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReservationViewComponent } from './reservation-view/reservation-view.component';
import { PhoneVerificationComponent } from './verification/phone-verification/phone-verification.component';
import { ConfirmPhoneNumberComponent } from './confirm-phone-number/confirm-phone-number.component';
import { ConfirmCodeService } from './confirm-code.service';
import { VerificationService } from './verification/verification.service';

// import {voyageService} from './accueil/services/voyage.service';
// canActivate: [AuthGuardService],

const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'reservation-view', component: ReservationViewComponent },
  { path: 'confirm-code', component: ConfirmPhoneNumberComponent },
  { path: 'reservation/:idVoyage',canActivate: [AuthGuardService], component: ReservationComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    ReservationComponent,
    CompteComponent,
    ConnexionComponent,
    NavbarComponent,
    ReservationViewComponent,
    PhoneVerificationComponent,
    ConfirmPhoneNumberComponent

  ],
  exports: [RouterModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[VoyageService, ClientService, ReservationService, AuthService, AuthGuardService, VerificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
