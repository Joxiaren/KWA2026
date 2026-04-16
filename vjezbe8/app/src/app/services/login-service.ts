import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token : WritableSignal<string> = signal(""); 
  
  payload = computed( () =>{
    let tokenValue = this.token();  

    if(tokenValue == undefined || tokenValue === "") return {}
    return JSON.parse(atob(this.token().split('.')[1])) 
  });

  http = inject(HttpClient);

  constructor(){
    let t = localStorage.getItem("token");

    if(t !== null){
      this.token.set(t);

    }
  }

  login(user: any){
    return this.http.post("http://localhost:3000/login", {username: user.username, password: user.password}).pipe(
      tap((r:any) => {
        this.token.set(r["token"]);
        localStorage.setItem("token", this.token())
      })
    );
  }

  getRoles(){
    if(this.payload == undefined) return null;
    return this.payload()["roles"];
  }

  getUsername(){
    if(this.payload == undefined) return null;
    return this.payload();
  }

  validateRole(roles: any){
    let userRoles = this.getRoles();

    if(userRoles != null){
      let skupRoles = new Set(roles);
      let skupUserRoles = new Set(userRoles);

      let result = skupRoles.intersection(skupUserRoles);

      if(result.size > 0) return true;
    }
    
    return false;
  }

  logout(){
    localStorage.removeItem("token");
    this.token.set("");
  }
}
