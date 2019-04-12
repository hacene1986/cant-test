import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IsncriptionComponent } from './auth/isncription/isncription.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PlatComponent } from './plat/plat.component';
import { PlatCantinereComponent } from './plat-cantinere/plat-cantinere.component';
import { MenuCantinereComponent } from './menu-cantinere/menu-cantinere.component';
import { RecapCantiniereComponent } from './recap-cantiniere/recap-cantiniere.component';

const appRoute: Routes = [
  {path: 'auth/inscription', component: IsncriptionComponent},
  {path: 'auth/connexion', component: ConnexionComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'plat', component: PlatComponent},
  {path: 'platCantiniere', component: PlatCantinereComponent},
  {path: 'menuCantiniere', component: MenuCantinereComponent},
  {path: 'recapCantiniere', component: RecapCantiniereComponent}
 
]
@NgModule({
  declarations: [
    AppComponent,
    IsncriptionComponent,
    ConnexionComponent,
    ContactComponent,
    MenuComponent,
    HeaderComponent,
    PlatComponent,
    PlatCantinereComponent,
    MenuCantinereComponent,
    RecapCantiniereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
