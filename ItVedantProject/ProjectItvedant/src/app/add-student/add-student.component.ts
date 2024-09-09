import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {

  constructor(private router:Router , private ss:StudentService){
    this.fun();
  }

  fun(){
    let username= localStorage.getItem('username');
    if(username == null){
      this.router.navigate(['auth']);
    }
  }

  formData = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$"),Validators.required]),
    class:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required])
});

get name():FormControl{
  return this.formData.controls.name;
}

get email():FormControl{
  return this.formData.controls.email;
}

get class(){
  return this.formData.controls.class;
}

get address(){
  return this.formData.controls.address;
}

saveData(data:any){
  this.ss.saveStudent(data).subscribe(data=>{
    this.router.navigate(['home']);
  })
}

}
