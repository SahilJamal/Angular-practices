import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {

  name:string='';

  count:string ='';

  cities:{[key:string]:string[]}={
    India:['taj mahel','lal kila'],
    Usa:['los angelus','new york'],
    Russia:['St Sophia Cathedral','Suzdal Kremlin'],
    China:['Shanghai. Shanghai','Hong Kong'],
  };
  
  
  col:any;

  selectColor(color:any){
      this.col = color;
  }
  
  opt:string = '';
  num1:number = 0;
  num2:number = 0;

  selectOpt(operation:any,number1:any,number2:any){
    this.opt = operation;
    this.num1 = Number.parseInt(number1);
    this.num2 = Number.parseInt(number2);
  }

  number:number[] = [1,2,3,4,5,6,7,8,9,10];

  employee:any[] = [
    {id:1,"name":"Sahil","salary":20000},
    {id:2,"name":"Mohammad","salary":50000},
    {id:3,"name":"Jamal","salary":40000},
    {id:4,"name":"Ahmad","salary":10000},
    {id:5,"name":"Siddique","salary":30000}
  ]
  
  @Input() data:any;

  @Output() cdata = new EventEmitter<string>();

  fun(){
    this.cdata.emit("This is child");
  }

}
