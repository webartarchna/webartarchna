import { Injectable } from '@angular/core';
import { UrlService} from '../services/url.service';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private serverurl: UrlService, private http: HttpClient, private router: Router) { }
  // url = `${this.serverurl.url}/api/login/MHrLoginCheck`
  getJwt() {
    const token = localStorage.getItem('user-token');
    if (token) {
      let payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload);
    }
    else
      return null
  }

  removeJwt() {
    localStorage.removeItem('user-token');
    window.location.href = "/"
  }

  setJwt(token: string) {
    localStorage.setItem('user-token', token);
  }

  login(formData: { userid: any; pass: any; }) {
    return this.http.post(`${this.serverurl.url}/api/login/MHrLoginCheck`, formData).toPromise()
  }
}
