import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationEnd } from '@angular/router';
import { FuncionesService } from './funciones.service';
import { filter } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private functions: FuncionesService,
    private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let isLogged: boolean = false;

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((e: any) => {

    });

    //Verificamos si esta logueado
    if (this.functions.isLogged()) {
      isLogged = true;
    } else {
      isLogged = false;
      this.functions.redirectToLogin();
    }

    return isLogged;
  }

}
