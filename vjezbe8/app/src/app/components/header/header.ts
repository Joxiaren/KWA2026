import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Logout } from 'app/components/logout/logout';
import { LoginService } from 'app/services/login-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Logout],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  loginService = inject(LoginService);

}
