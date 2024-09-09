import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-auth',
  templateUrl: './student-auth.component.html',
  styleUrls: ['./student-auth.component.scss']
})
export class StudentAuthComponent {

  constructor(private us:AuthService,private http:HttpClient,private router:Router){}

  formData = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$"),Validators.required]),
    password:new FormControl('',[Validators.required])
});

formData1 = new FormGroup({
  username:new FormControl('',[Validators.required,Validators.maxLength(10)]),
  userpassword:new FormControl('',[Validators.required])
});

get name():FormControl{
  return this.formData.controls.name;
}

get email():FormControl{
  return this.formData.controls.email;
}

get password():FormControl{
  return this.formData.controls.password;
}

get username(){
  return this.formData1.controls.username;
}

get userpassword(){
  return this.formData1.controls.userpassword;
}

  user:boolean = true;

  register(){
    this.user = !this.user;
  }

  saveData(studentInfo:any){
    this.us.saveuser(studentInfo).subscribe(res=>{
      console.warn(studentInfo)
      this.formData.reset();
    });
    this.register();
  }

  doLogin(){
    this.http.get<any>('http://localhost:3000/authusers/').subscribe(data=>{
      const user = data.find((a:any)=>{   
        return a.name==this.formData1.controls.username.value && a.password==this.formData1.controls.userpassword.value
      });
      if(user){
        this.formData.reset();
        localStorage.setItem('username',user.name);
        this.router.navigate(['home']).then(()=>{
          location.reload();
        });
      }else{
        this.formData.reset();
        alert('invalid credentials');
      }
    });
  }

}
