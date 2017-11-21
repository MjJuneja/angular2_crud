import {Injectable} from '@angular/core';
import {DB} from '../database';

@Injectable()
export class Editing {
    constructor(private db:DB){}
 editDetail(obj){
    this.db.DataArray = this.db.DataArray.filter((x)=>{
        if(x.id == obj.id){
            x.name = obj.name;
            x.desc = obj.desc;
        }
        return x;
    });
    console.log(this.db.DataArray);
 };  

}