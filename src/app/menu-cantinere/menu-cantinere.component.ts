import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cantinere',
  templateUrl: './menu-cantinere.component.html',
  styleUrls: ['./menu-cantinere.component.css']
})
export class MenuCantinereComponent implements OnInit {

 // Pour afficher l'onglet Formules (menu) par défaut
 viewMode = 'tabToday';
 // TODO : Récupere le numéro de la semaine actuelle
 weekNumber = 49;
 listMenuThisWeek: Array<Menu>;
 listMenuToday: Array<Menu>;

 constructor(private menuService: MenuService) { }

 // On initialise la vue en récupérant tous les menu du jour et de la semaine
 ngOnInit() {
   this.getAllMenuForWeek();
  // this.getAllMenuForToday();
 }

 getAllMenuForWeek() {
   this.menuService.getAllMenuForWeek(this.weekNumber)
     .subscribe(
       (response) => {
         this.listMenuThisWeek = response;
         console.log('listMenuThisWeek: ', this.listMenuThisWeek);
       },
       (error) => {
         console.log('Error in Menu.ts ... getAllMenuForWeek()', error);
       }
     );
 }

//  getAllMenuForToday() {
//    this.menuService.getAllMenuForToday()
//      .subscribe(
//        (response) => {
//          this.listMenuToday = response;
//          console.log('listMenuToday: ', this.listMenuToday);
//        },
//        (error) => {
//          console.log('Error in Menu.ts ... getAllMenuForToday()', error);
//        }
//      );
//  }

}
