import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  name:string = "sahil";

  today:string = "Saturday"

  date:number = Date.now();

  money:number = 10000;

  persons:Person[] = [{
    id:101,
    name:"Sahil",
    salary:100000
  },{
    id:102,
    name:"Ahmad",
    salary:200000
  },{
    id:103,
    name:"Jamal",
    salary:1000000
  }
]

}

interface Person{
  id:number;
  name:string;
  salary:number;
}
