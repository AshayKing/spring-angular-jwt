import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  getCities() {
    return this.http.get('/springjwt/cities');
  }

  getUsers() {
    return this.http.get('/springjwt/users');
  }
}
