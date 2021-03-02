import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';
import {User} from '../../auth/user.model';
import {SmileysService} from '../../_common/smileys.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  user: User | null = null;
  authSubscription!: Subscription;

  // userRole = null;

  public coolFace = '';

  constructor(
    private smileysService: SmileysService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.coolFace = this.smileysService.getSmiley();

    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.user = authStatus;
    });
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
