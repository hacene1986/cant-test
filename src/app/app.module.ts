import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsncriptionComponent } from './auth/isncription/isncription.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';

import { HeaderComponent } from './header/header.component';

import { PlatCantinereComponent } from './plat-cantinere/plat-cantinere.component';
import { MenuCantinereComponent } from './menu-cantinere/menu-cantinere.component';
import { RecapCantiniereComponent } from './recap-cantiniere/recap-cantiniere.component';


@NgModule({
  declarations: [
    AppComponent,
    IsncriptionComponent,
    ConnexionComponent,
    ContactComponent,
    HeaderComponent,
    PlatCantinereComponent,
    MenuCantinereComponent,
    RecapCantiniereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
