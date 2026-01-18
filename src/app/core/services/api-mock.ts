import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface DashboardData {
  kpis: { receita: number; pedidos: number; ticket: number };
  table: { data: string; cliente: string; valor: number; status: string }[];
  chart: { date: string; value: number }[];
}

@Injectable({ providedIn: 'root' })
export class ApiMockService {

  private hasPassword = false;

  private wait() {
    return Math.random() * 600 + 600;
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return new Observable(obs => {
      setTimeout(() => {

        if (!this.hasPassword) return obs.error('Usuário sem senha criada');
        if (password !== '12345678') return obs.error('Senha inválida');

        obs.next({ token: 'mock-token-123' });
        obs.complete();

      }, this.wait());
    });
  }

  requestPasswordReset(email: string) {
    return of({ resetId: 'RESET123' }).pipe(delay(this.wait()));
  }

  confirmPasswordReset(email: string, code: string, newPassword: string) {
    if (code !== '123456') return throwError(() => 'Código inválido');
    this.hasPassword = true;
    return of(null).pipe(delay(this.wait()));
  }

  createPassword(email: string, code: string, newPassword: string) {
    if (code !== '123456') return throwError(() => 'Código inválido');
    this.hasPassword = true;
    return of(null).pipe(delay(this.wait()));
  }

  getDashboard(period: 7 | 30): Observable<DashboardData> {
    return of({
      kpis: { receita: 12000, pedidos: 45, ticket: 266 },
      chart: Array.from({ length: period }, (_, i) => ({ date: `Dia ${i+1}`, value: Math.random() * 1000 })),
      table: [
        { data: '2026-01-01', cliente: 'João', valor: 500, status: 'Pago' },
        { data: '2026-01-02', cliente: 'Maria', valor: 800, status: 'Pendente' }
      ]
    }).pipe(delay(this.wait()));
  }
}
