import {Injectable} from '@angular/core';
import {DataModel} from '../data.modal';
@Injectable()
export class EditService{
 prepareProduct():DataModel[]{
      let db:DataModel[]=[];
      for(let i=0;i<3;i++){
        let data:DataModel = new DataModel(i,"xyz"+i,"abcd zyxa"+(i*2));
        db.push(data);
        this.counter = 1;
      }
      return db;
    }
counter:number = 0;
 callData():Promise<DataModel[]>{
     return Promise.resolve(this.prepareProduct());
 }

}