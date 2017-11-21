import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DB} from './database';
import {Router} from '@angular/router';
@Injectable()
export class UserRightGuard implements CanActivate {
  constructor(private db:DB, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.db.checkUser=="admin"){
      return true;
    }
    else if(this.db.checkUser == "guest"){
      this.router.navigate(['/show']);
    }
  }
}
