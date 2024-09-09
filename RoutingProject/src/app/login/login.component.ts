import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private http:HttpClient,private router:Router){}

  formData = new FormGroup({
    username:new FormControl(''),
    userpassword:new FormControl('')
  });

  doLogin(){
    this.http.get<any>('http://localhost:3000/authusers/').subscribe(data=>{
      const user = data.find((a:any)=>{   
        return a.username==this.formData.controls.username.value && a.password==this.formData.controls.userpassword.value
      });
      if(user){
        this.formData.reset();
        alert('login Succeffully');
        localStorage.setItem('username',user.username);
        location.reload();
        this.router.navigate(['contact']);
      }else{
        this.formData.reset();
        alert('invalid credentials');
      }
    });
  }

}
