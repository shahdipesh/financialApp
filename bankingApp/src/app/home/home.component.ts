import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayForm="login";
  userNavigation="false"


  constructor(private userService:UserServiceService) { }

  authenticate(){
    console.log ("home ts");
    this.userService.getUser();
  }

  ngOnInit(): void {
    console.log ("service called");
  }

}