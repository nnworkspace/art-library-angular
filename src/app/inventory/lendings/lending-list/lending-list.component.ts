import {Component, Input, OnInit} from '@angular/core';
import {LendingMeta} from '../../../_model/lendingMeta';

@Component({
  selector: 'app-lending-list',
  templateUrl: './lending-list.component.html',
  styleUrls: ['./lending-list.component.scss']
})
export class LendingListComponent implements OnInit {
  @Input() lendings!: LendingMeta[];
  @Input() visibleColumns!: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
