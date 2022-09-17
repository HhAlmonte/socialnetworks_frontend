import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  key = 'token';

  constructor() { }

  setLocalStorage(token: string): void {
    localStorage.setItem(this.key, token);
  }

  getTokenDecoded(): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getToken());
    return decodedToken;
  }

  removeLocalStorage(): void {
    localStorage.removeItem(this.key);
  }

  getToken(): any{
    return localStorage.getItem(this.key);
  }
}
