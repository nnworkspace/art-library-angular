import faces from '../../../assets/coolFaces.json';
import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';
import {User} from "../../auth/user.model";

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

  public coolFaces: string[] = faces;
  public coolFace = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.coolFaces.length);
    this.coolFace = this.coolFaces[random];

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
