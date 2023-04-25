import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-button',
  template: '<button (click)="login()">Login</button>'
})
export class LoginButtonComponent {
  constructor(private router:Router) {}

  login() {
    this.router.navigate(['/login']);
  }
}