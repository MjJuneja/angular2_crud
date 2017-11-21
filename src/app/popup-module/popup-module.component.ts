import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Editing} from './popup.service';
import {DataModel} from '../data.modal';
@Component({
  selector: 'app-popup-module',
  templateUrl: './popup-module.component.html',
  styleUrls: ['./popup-module.component.css'],
  providers: [Editing]
})
export class PopupModuleComponent implements OnInit {
  private id:number;
  private name:string;
  private desc:string;
  constructor(private route:ActivatedRoute , private edit:Editing , private router:Router) { }
  editDetails(){
    var obj:DataModel = new DataModel(this.id,this.name,this.desc);
    console.log(obj);
    this.edit.editDetail(obj);
    this.router.navigate(['/show']);
  }
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params.id;
      this.name= params.name;
      this.desc = params.desc;
    });
  
      

  }

}
