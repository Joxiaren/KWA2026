import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient){

  }
  
  getAll(){
    return this.http.get<any[]>("http://localhost:3000/klijenti")
  }
  create(noviStudent: any){
    return this.http.post("http://localhost:3000/klijenti", noviStudent );
  }
  update(id: any, noviStudent: any){
    return this.http.put(`http://localhost:3000/klijenti/${id}`, noviStudent);
  }
  delete(id: any){
    return this.http.delete(`http://localhost:3000/klijenti/${id}`);
  }
}
