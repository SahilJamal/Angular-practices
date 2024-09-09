import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstProject';

  name:string = "";
  result:any;

  display(sahil:any){
    // document.body.append(sahil);
    // document.body.append(" Hello My name is Sahil \n");
    this.name = sahil;

  }

  calculator(f:any,s:any,op:any){
    f = Number.parseInt(f);
    s = Number.parseInt(s);
    switch(op){
      case "+":
        this.result = (f+s);
        break;
      case "-":
        this.result = (f-s);
        break;
      case "*":
        this.result = (f*s);
        break;  
      case "/":
        this.result = (f/s);
        break;    
    }
  }

  pData:string = "This is Parrent";

  cData:any;

}
