import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

  private TOKEN_KEY = 'token';
  private EMAIL_KEY = 'email';

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setEmail(email: string) {
    localStorage.setItem(this.EMAIL_KEY, email);
  }

  getEmail(): string | null {
    return localStorage.getItem(this.EMAIL_KEY);
  }

  clear() {
    localStorage.clear();
  }
}
