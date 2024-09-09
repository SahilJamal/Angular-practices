import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component {

  formData = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      email:new FormControl('',[Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$"),Validators.required]),
      contact:new FormControl('',[Validators.required])
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
