import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

import {User} from './user.model';
import {AuthData} from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authChange = new Subject<User | null>();
  private user: User | null = null;

  constructor(private router: Router) { }

  // our app does not provide user register service,
  // all user data should come from alpha org's ldap.....
  // registerUser(authData: AuthData) {
  //   this.user = {
  //     .....
  //   }
  // }

  login(authData: AuthData): void {
    this.user = {
      userId: authData.userId,
      // email: authData.userId.concat( '@alpha.org'),
      roles: authData.roles
    };

    console.log('length of the array user roles: ' + this.user.roles.length);
    this.authSuccess();
  }

  logout(): void {
    this.user = null;
    this.authChange.next(null);
    this.router.navigate(['/login']);
  }

  getUser(): User | null {
    return this.user == null ? null : {...this.user};
  }

  isLoggedIn(): boolean {
    return this.user != null;
  }

  private authSuccess(): void {
    this.authChange.next(this.getUser());

    // back to previous page
    const { redirect } = window.history.state;
    console.log('redirect: ' + redirect);
    this.router.navigateByUrl(redirect || '');
  }
}
