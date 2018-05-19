import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route): boolean {
    const expectedRole = route.data.expectedRole;

    if (
      !this.authService.isAuthenticated() ||
      !this.authService.hasRole(expectedRole)
    ) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }

}
