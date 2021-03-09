import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

import {ArtworkService} from '../artwork.service';
import {ArtworkMeta} from '../../../_model/artworkMeta';
import {ArtworkItemUsecaseEnum} from '../artwork-item-usecase-enum.model';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit, OnDestroy {
  itemUsecase: typeof ArtworkItemUsecaseEnum = ArtworkItemUsecaseEnum;

  artworkMetas: ArtworkMeta[] | null = null;
  subscription!: Subscription;

  itemIndexLower = 0;
  itemIndexUpper = 12;

  constructor(private artworkService: ArtworkService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.artworkService.artworksChange
      .subscribe(
        (changes: ArtworkMeta[]) => {
          this.artworkMetas = changes;
        }
      );
    this.artworkMetas = this.artworkService.getArtworkMetas();
  }

  onNewArtwork(): void {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  // used to build an array of artworkMetas relevant at any given time
  getPaginatorData(event: PageEvent): PageEvent {
    this.itemIndexLower = event.pageIndex * event.pageSize;
    this.itemIndexUpper = this.itemIndexLower + event.pageSize;
    return event;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
