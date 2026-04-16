import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login-service';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  loginService = inject(LoginService);
  router = inject(Router);

  logout(){
    this.loginService.logout();
    this.router.navigate(['']);
  }
}
