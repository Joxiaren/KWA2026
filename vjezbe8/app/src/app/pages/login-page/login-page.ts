import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login-service';

@Component({
  selector: 'app-login-page',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login-page.html',   
  styleUrl: './login-page.css',
})
export class LoginPage implements OnInit{
  
  loginService = inject(LoginService);
  router = inject(Router);
  loginWarning : WritableSignal<boolean> = signal(false);

  form = new FormGroup({
    username: new FormControl(),
    password : new FormControl()
  });
  
  ngOnInit(): void {
    this.loginWarning.set(false);
  }

  login(){
    this.loginService.login(this.form.value).subscribe({
      "next": () => this.router.navigate(['']) ,
      "error": (res) => { 
        console.log(res);
        this.loginWarning.set(true);
      } 
    });
  }
}
