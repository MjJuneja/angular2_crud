import { Component, OnInit } from '@angular/core';
import {DataModel} from '../data.modal';
import {DB} from '../database';
import {Entry} from './entry.service';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  providers:[Entry]
})
export class EntryComponent implements OnInit {
  // dataObj;
  name:string;
  desc:string;
  constructor(private db:DB, private entry:Entry) { }
  takeinput_name(event){
    this.name = event.target.value;
  }
  takeinput_desc(event){
    this.desc = event.target.value;
  }
  addData(){
    
    var dataObj:DataModel = new DataModel(this.db.generateId(),this.name,this.desc);
    this.db.DataArray.push(dataObj);
    console.log(this.db.DataArray);
    
    
  }
 ngOnInit() {
   setTimeout(()=>{
    console.log(this.db.DataArray);
    // dataObj:DataModel;
   },2000);
   
 }
}
