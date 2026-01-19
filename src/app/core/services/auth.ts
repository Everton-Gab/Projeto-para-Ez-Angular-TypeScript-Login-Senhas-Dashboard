import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): Observable<any> {
    const mockDelay = Math.floor(Math.random() * (1200 - 600 + 1)) + 600;
    return of({ token: 'mock-token' }).pipe(delay(mockDelay));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

