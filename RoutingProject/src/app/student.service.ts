import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url:string = "http://localhost:3000/students/";

  constructor(private http:HttpClient) { }

  getStudent(){
    return this.http.get(this.url);
  }

  saveStudent(data:any){
    return this.http.post(this.url,data);
  }

  deleteStudent(id:any){
   return this.http.delete(this.url+id);
  }

  updateStudent(id:any,data:any){
    return this.http.put(this.url+id,data);
  }
}
