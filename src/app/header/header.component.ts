import { Component, OnInit } from '@angular/core';
import {DB} from '../database';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    private User:string;
  constructor(private db:DB) {
    this.User = "User Rights ";
   }

  selectAdmin(){
    this.db.checkUser = "admin";
    this.User = "Admin";
  }
  selectGuest(){
    this.db.checkUser = "guest";
    this.User = "Guest";
  }
  ngOnInit() {
  }

}
