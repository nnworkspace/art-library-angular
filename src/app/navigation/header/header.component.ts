import faces from '../../../assets/coolFaces.json';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  public coolFaces: string[] = faces;
  public coolFace = '';

  constructor() { }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.coolFaces.length);
    this.coolFace = this.coolFaces[random];
  }

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }
}
