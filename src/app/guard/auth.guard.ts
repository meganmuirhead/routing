import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    private router: Router
  ) { }
  private users = [
    {
      userName: 'megan',
      password: 'meganPass'
    },{
      userName: 'Megan',
      password: 'MeganPass2'
    },
  ]

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userName = this.users.find(u => u.userName === this.authService.username)
    console.log("username:",userName)
    console.log('service:', this.authService)
    if(userName && userName.password === this.authService.password) {
      return true;
    }
    return this.router.parseUrl('/not-authorized');
  }

}
