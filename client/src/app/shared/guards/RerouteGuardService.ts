import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class RerouteGuardService implements CanActivate {
  constructor(private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot) {
    this.router.navigate(['/login']);
    return false;
  }
}
