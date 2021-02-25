import { Component, OnInit } from '@angular/core';

import faces from '../assets/coolFaces.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'art-library-angular';
  public coolFaces: string[] = faces;
  public coolFace = '';

  // @ViewChild

  ngOnInit(): void{
    const random = Math.floor(Math.random() * this.coolFaces.length);
    this.coolFace = this.coolFaces[random];
    console.log(this.coolFace);
  }

}
