import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {PageEvent} from '@angular/material/paginator';

import {Artwork} from '../../../_model/artwork';
import {ArtworkService} from '../artwork.service';
import {SmileysService} from '../../../_common/smileys.service';
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

  awFilterForm!: FormGroup;
  artFormOptions = Object.values(Artwork.ArtFormEnum);
  statusOptions = Object.values(Artwork.StatusEnum);

  itemIndexLower = 0;
  itemIndexUpper = 12;

  constructor(private artworkService: ArtworkService,
              private smileysService: SmileysService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initArtworkFilterForm();

    this.subscription = this.artworkService.artworksChange
      .subscribe(
        (changes: ArtworkMeta[]) => {
          this.artworkMetas = changes;
        }
      );
    this.artworkMetas = this.artworkService.getArtworkMetas();
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
