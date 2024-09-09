import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:3000/authusers";

  getStudent(){
    return this.http.get(this.url);
  }

  saveuser(data:any){
    return this.http.post(this.url,data);
  }

}
