import { Component, OnInit } from '@angular/core';

import {SmileysService} from './_common/smileys.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Art Library of Alpha Org';

  constructor(private smileysService: SmileysService) {}

  ngOnInit(): void{
    console.log(this.smileysService.getSmiley());
  }

}
