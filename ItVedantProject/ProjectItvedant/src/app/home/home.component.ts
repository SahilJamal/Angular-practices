import { Component } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private ss:StudentService,private router:Router){
    this.getData();
    this.fun();
  }

  formData = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email:new FormControl('',[Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$"),Validators.required]),
    class:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required])
  });

  studentId:any;
  studentData:any;
  p:number = 1;


  fun(){
      let username= localStorage.getItem('username');
      if(username == null){
        this.router.navigate(['auth']);
      }
  }


  getData(){
   this.ss.getStudent().subscribe(data=>{
    this.studentData = data;
   })
  }

  editData(info:any){
    this.studentId = info.id;
    this.formData.controls.name.setValue(info.name);
    this.formData.controls.class.setValue(info.class);
    this.formData.controls.email.setValue(info.email);
    this.formData.controls.address.setValue(info.address);
  }

  update(){
    this.ss.updateStudent(this.studentId,this.formData.value).subscribe(data=>{
      console.log(data);
      
      this.getData();
      this.formData.reset();
    });
  }

  deleteStudent(id:any){
    this.ss.deleteStudent(id).subscribe(data=>{
      this.getData();
    })
  }

  get name(){
    return this.formData.controls.name;
  }

  get class(){
    return this.formData.controls.class;
  }

  get address(){
    return this.formData.controls.address;
  }

  get email(){
    return this.formData.controls.email;
  }

}
