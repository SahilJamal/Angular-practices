import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    constructor(private ss:StudentService){
      this.getData();
    }

    formData = new FormGroup({
      name:new FormControl(''),
      course:new FormControl(''),
      fees:new FormControl('')
  });

    studentData:any;
    search:any;
    p:number = 1;

    getData(){
      this.ss.getStudent().subscribe(data=>{this.studentData = data;});
    }

    saveData(studentInfo:any){
      this.ss.saveStudent(studentInfo).subscribe(res=>{
        this.getData();
        this.formData.reset();
      });
    }

    deleteStudent(id:any){
      this.ss.deleteStudent(id).subscribe(data=>{
        this.getData();
      })
    }

    studentId:any;

    editData(info:any){
      this.studentId = info.id;
      this.formData.controls.name.setValue(info.name);
      this.formData.controls.course.setValue(info.course);
      this.formData.controls.fees.setValue(info.fees);
    }

    update(){
      this.ss.updateStudent(this.studentId,this.formData.value).subscribe(data=>{
        console.log(data);
        
        this.getData();
        this.formData.reset();
      });
    }
}
