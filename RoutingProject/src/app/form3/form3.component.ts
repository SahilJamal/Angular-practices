import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component {

  constructor(private fb:FormBuilder){}

  formData = this.fb.group({
      name:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$"),Validators.required]],
      contact:['',[Validators.required]]
  });

  get name():FormControl{
    return this.formData.controls.name;
  }

  get email():FormControl{
    return this.formData.controls.email;
  }

  get contact():FormControl{
    return this.formData.controls.contact;
  }

}
