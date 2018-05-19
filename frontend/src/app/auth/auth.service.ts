import { TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD, TOKEN_NAME } from './auth.constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static AUTH_TOKEN = '/oauth/token';

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any): Observable<any> {
    const body = `username=${encodeURIComponent(user.username)}&password=${encodeURIComponent(user.password)}&grant_type=password`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)
    });
    return this.http.post(AuthService.AUTH_TOKEN, body, { headers });
  }

  setSession(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
    this.router.navigate(['home']);
  }

  /**
   * Method to clear up existing session of user
   */
  logout(): void {
    localStorage.removeItem(TOKEN_NAME);
    this.router.navigate(['login']);
  }


  /**
   * Method is used to retrieve active token saved
   */
  getToken(): String {
    return localStorage.getItem(TOKEN_NAME);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token || token === undefined) {
      return false;
    }
    const expiryDate = new Date(0);
    const exp = decode(token).exp;
    expiryDate.setUTCSeconds(exp);
    return expiryDate.valueOf() > new Date().valueOf();
  }

  /**
   * Method used to check role of user
   * Go to : jwt.io
   */
  hasRole(role: string): boolean {
    const token: any = this.getToken();
    const roleClaim: Array<string> = decode(token).authorities;
    return roleClaim.includes(role);
  }
}
