import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SnackBarService } from 'src/app/services/snack-bar.service';



@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor(private route: Router,private snackbar:SnackBarService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isAuth = localStorage.getItem('isAuth');
    if(isAuth){
      return true;

    }
    else{
      return this.route.navigate(['login']);

    }
  }

}
