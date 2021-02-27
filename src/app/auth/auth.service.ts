import {Subject} from 'rxjs';

import {User} from './user.model';
import {AuthData} from './auth-data.model';

export class AuthService {
  authChange = new Subject<boolean>();
  private user: User | null = null;

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

    this.authChange.next(true);
  }

  logout(): void {
    this.user = null;
    this.authChange.next(false);
  }

  getUser(): User | null {
    return this.user == null ? null : {...this.user};
  }

  isAuth(): boolean {
    return this.user != null;
  }
}
