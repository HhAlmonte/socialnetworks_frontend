import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login_user, user } from '@app/models/user.models';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/socialnetworksapi/User/';
  }

  login(user: login_user): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + 'login/', user);
  }
  regiset(user: user): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + 'register/', user);
  }

  getUser(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }
}
