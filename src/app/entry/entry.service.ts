import {Injectable} from '@angular/core';

@Injectable()

export class Entry{
    private id:number = 1000;

    generateId():number{
        this.id++;
        return this.id;
    }
}