import { Component , OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StartUpProject';

  ngOnInit() {
    // You can now use jQuery in your component
    $(document).ready(function () {
      alert("Jqurey");
    });
  }

}
