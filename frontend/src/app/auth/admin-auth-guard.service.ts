import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated() && !this.authService.hasRole('ADMIN_USER')) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
