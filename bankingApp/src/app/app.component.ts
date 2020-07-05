import { UserServiceService } from './user-service.service';
import { Component,OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

user:any=[];

constructor (private userService:UserServiceService) {}


  ngOnInit() {
this.userService.getUser().map(user=>{
this.user=user;
})

    $(document).ready(function () {
      $('#menu-toggle').click(function (e) {
        e.preventDefault();
        $('#wrapper').toggleClass('toggled');
      });
    });
  }
}