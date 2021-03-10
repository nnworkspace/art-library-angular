import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {SmileysService} from '../../../_common/smileys.service';
import {LendingMeta} from '../../../_gen/inventory';

@Component({
  selector: 'app-lending-list',
  templateUrl: './lending-list.component.html',
  styleUrls: ['./lending-list.component.scss']
})
export class LendingListComponent implements OnInit, AfterViewInit {
  @Input() lendings!: LendingMeta[];
  @Input() visibleColumns = ['artworkId', 'userId', 'lendingStatus', 'startDate', 'endDate'];

  lendingsTDS: MatTableDataSource<LendingMeta> | null = null;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private smileysService: SmileysService) { }

  ngOnInit(): void {
    console.log(this.smileysService.getSmiley() + ' from LendingListComponent.ngOnInit');
    console.log('this.lendings injected and not null? ' + this.lendings ? ' true ' : ' false ');

    this.lendingsTDS = new MatTableDataSource<LendingMeta>(this.lendings);
  }

  ngAfterViewInit(): void {
    if (this.lendingsTDS) {

      // const sortState: Sort = {active: 'startDate', direction: 'desc'};
      // this.sort.active = sortState.active;
      // this.sort.direction = sortState.direction;
      // this.sort.sortChange.emit(sortState);
      console.log(this.smileysService.getSmiley() + ' from LendingListComponent.ngAfterViewInit');
      console.log('is this matSort not null? ' + this.sort);
      this.lendingsTDS.paginator = this.paginator;
      this.lendingsTDS.sort = this.sort;
    }
  }

}
