import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>Bem-vindo ao Dashboard!</h1>`
})
export class DashboardComponent { } // Nome deve ser exatamente este