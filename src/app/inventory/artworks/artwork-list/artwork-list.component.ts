import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

import {Artwork, ArtworkMeta, ArtworksService} from '../../../_gen/inventory';
// import {ArtworkService} from '../artwork.service';
import {SmileysService} from '../../../_common/smileys.service';

import {ArtworkItemUsecaseEnum} from '../artwork-item-usecase-enum.model';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit, OnDestroy {
  itemUsecase: typeof ArtworkItemUsecaseEnum = ArtworkItemUsecaseEnum;

  artworkMetas: ArtworkMeta[] | undefined;
  subscription!: Subscription;

  awFilterForm!: FormGroup;
  artFormOptions = Object.values(Artwork.ArtFormEnum);
  statusOptions = Object.values(Artwork.StatusEnum);

  readonly DEFAULT_PAGE_SIZE = 20;
  readonly DEFAULT_ITEM_OFFSET = 0;
  itemIndexLower = 0;
  itemIndexUpper = 20;

  constructor( private artworksApiGateway: ArtworksService,
               // private artworkService: ArtworkService,
               private smileysService: SmileysService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initArtworkFilterForm();

    const artworksResponse$ = this.artworksApiGateway
      .getArtworks(this.DEFAULT_PAGE_SIZE, this.DEFAULT_ITEM_OFFSET,
        undefined, undefined, undefined,
        undefined, undefined, undefined);

    artworksResponse$.subscribe( artworksResponse => {
      this.artworkMetas = artworksResponse.artworkMetas;
      console.log(this.smileysService.getSmiley() + ' from ArtworkListComponent.ngOnInit, this.artworkMetas: ' + this.artworkMetas);
    });
  }

  private initArtworkFilterForm(): void {
    this.awFilterForm = new FormGroup({
      title: new FormControl(),
      artForm: new FormControl(),
      description: new FormControl(),
      artists: new FormControl(),
      artworkStatus: new FormControl(),
      availableFrom: new FormControl()
    });
  }

  onFilterFormReset(): void {
    this.initArtworkFilterForm();
  }

  onFilterFormSubmit(): void {
    console.log(this.smileysService.getSmiley() +  ' ArtworkListComponent.onFilterFormSubmit() is called' );
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
