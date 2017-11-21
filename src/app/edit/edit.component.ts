import { Component, OnInit } from '@angular/core';
import {EditService} from './edit.service';
import {DataModel} from '../data.modal';
import {DB} from '../database';
import {Router,RouterLink} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[EditService]
})
export class EditComponent implements OnInit {

  constructor(private edit:EditService,private db:DB,private route : Router) { }

    public DataArray:DataModel[]=[];

    showData(){
    
      console.log("data array is",this.db.DataArray);
      this.DataArray = this.db.DataArray;
    
    }
   
    DeleteData(item){
      this.DataArray = this.DataArray.filter((x)=>{
        if(x.id!=item.id){
          return x;
        }
      });
      this.db.DataArray = this.DataArray;
    }

     ngOnInit(){
     
     this.showData();
    
    }

}
