import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RoutingProject';

  constructor(private router:Router){
    this.login();
  }

  seesionuser:any;

  login(){  
    this.seesionuser = localStorage.getItem('username');
  }

  logout(){
    localStorage.removeItem('username');
    location.reload();
    this.router.navigate(['login']);
  }

}
