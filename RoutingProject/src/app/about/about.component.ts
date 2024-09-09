import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private us:UserserviceService,private router:Router){
    this.getData();
    this.fun();
  }
  name:any;
  fun(){
      this.name = localStorage.getItem('username');
      if(this.name == null){
        this.router.navigate(['login']);
      }
  }

  mydata:any;

  getData(){
    this.us.getUsersList().subscribe(data=>{
      this.mydata = data;
    });
  }

}
