import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from "@app/common";

@Injectable() 
export class AuthGuard implements CanActivate {
    public constructor(private authService:AuthService,private router: Router) {
      //debugger;
      console.log('Activate can activate hook')
  }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       // debugger;
        // if (this.authService.getUserProfile()!=null) {
        //     return true;
        // }

        // // not logged in so redirect to login page with the return url
        // this.router.navigate(['/auth/logins']);
        // return false;
        return true;
    }
}