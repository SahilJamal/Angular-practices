import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router:Router){
    this.login();
  }
  seesionuser:any;

  login(){  
    this.seesionuser = localStorage.getItem('username');
  }

  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['auth']).then(()=>{
      location.reload();
    });
  }


}
