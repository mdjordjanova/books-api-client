import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot) {
    this.router.navigate(['/login']);
    return false;
  }


  canLoad(route: Route) {
    this.router.navigate(['/login']);
    return false;
  }
}
