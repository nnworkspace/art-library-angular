import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

import {User} from './user.model';
import {AuthData} from './auth-data.model';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | null = null;

  constructor(private router: Router){}

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
      email: authData.userId.concat( '@alpha.org'),
      role: authData.role
    };

    this.authSuccess();
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(): User | null {
    return this.user == null ? null : {...this.user};
  }

  isAuth(): boolean {
    return this.user != null;
  }

  private authSuccess(): void {
    this.authChange.next(true);
    this.router.navigate(['/borrowing']);
  }
}
