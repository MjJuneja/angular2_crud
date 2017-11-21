import { Component,OnInit } from '@angular/core';
import {DataModel} from './data.modal';
import {DB} from './database';
import {UserRightGuard} from './user-right.guard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserRightGuard]
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private db:DB){}
  showData(){
     
    this.db.callData().then((data)=>{
      this.db.DataArray = data;
      console.log(data);
    });
      }

  ngOnInit() {
    this.showData();
    
  }

    }

