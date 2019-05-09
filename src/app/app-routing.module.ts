import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatCantinereComponent } from './plat-cantinere/plat-cantinere.component';
import { MenuCantinereComponent } from './menu-cantinere/menu-cantinere.component';
import { RecapCantiniereComponent } from './recap-cantiniere/recap-cantiniere.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {'path': 'platCantiniere', 'component': PlatCantinereComponent},
  {'path': 'menuCantiniere', 'component': MenuCantinereComponent},
  {'path': 'recapCantiniere', 'component': RecapCantiniereComponent},
  {'path': 'contact', 'component': ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
