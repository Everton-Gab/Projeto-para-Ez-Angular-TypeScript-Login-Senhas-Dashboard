import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

  setToken(token: string) { localStorage.setItem('token', token); }
  getToken() { return localStorage.getItem('token'); }

  setEmail(email: string) { localStorage.setItem('email', email); }
  getEmail() { return localStorage.getItem('email'); }

  clear() { localStorage.clear(); }
}

