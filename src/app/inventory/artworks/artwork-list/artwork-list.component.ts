import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {ArtworkService} from '../artwork.service';
import {ArtworkMeta} from '../../../_model/artworkMeta';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.scss']
})
export class ArtworkListComponent implements OnInit, OnDestroy {

  artworkMetas: ArtworkMeta[] | null = null;
  subscription!: Subscription;

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // getFirstImageUrl(): string | undefined {
  //   return this.artworkMetas?.[0].imageUrls?.[0];
  // }
}
