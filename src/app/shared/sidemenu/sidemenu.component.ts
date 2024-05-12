import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

public menuItems = routes
.map(route => route.children ?? [])
.flat()
//muestra solo las rutas que no tienen el path vacio
.filter(route => route && route.path)
//Excluir la ruita user/:id;
.filter(route => !route.path?.includes(':'))
  constructor() {
    // const dashboardRoutes = routes
    //   .map(route => route.children ?? [])
    //   .flat()
    //   //muestra solo las rutas que no tienen el path vacio
    //   .filter(route => route && route.path)
    //   //Excluir la ruita user/:id;
    //   .filter(route => !route.path?.includes(':'))

    // console.log(dashboardRoutes)
  }
}
