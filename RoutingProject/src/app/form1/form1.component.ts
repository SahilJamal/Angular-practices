import { Component } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component {

  myfun(data:From){
    console.log(data);
  }

};

interface From{
  email:string;
  password:string;
};
