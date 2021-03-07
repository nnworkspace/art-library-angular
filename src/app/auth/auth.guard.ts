import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isLoggedIn()) {
      const userRoles = this.authService.getUser()?.roles;

      console.log('user roles: ' + userRoles);
      console.log('path required role: ' + route.data.role);
      if (route.data.role && userRoles?.includes(route.data.role)) {
        return true;
      }
    }

    console.log('Could not authenticate');
    console.log('this.router.url: ' + this.router.url);
    this.router.navigate(['login'], {state: {redirect: state.url}});
    return false;
  }
}
