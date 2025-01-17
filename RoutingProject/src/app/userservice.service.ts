import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  url:string = 'https://jsonplaceholder.typicode.com/posts';

  getUsersList(){
    return this.http.get(this.url);
  }

}
