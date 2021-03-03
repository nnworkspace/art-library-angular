import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ArtworkDetailUsecaseEnum} from '../artwork-detail-usecase-enum.model';
import {SmileysService} from '../../../_common/smileys.service';
import {ArtworkService} from '../artwork.service';
import {Artwork} from '../../../_model/artwork';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.scss']
})
export class ArtworkDetailComponent implements OnInit {

  detailUsecase: typeof ArtworkDetailUsecaseEnum = ArtworkDetailUsecaseEnum;
  usecase = ArtworkDetailUsecaseEnum.viewOnly;
  artwork = {} as Artwork;
  artworkId: string | null = null;

  constructor(private smileysService: SmileysService,
              private artworkService: ArtworkService,
              private router: Router,
              private route: ActivatedRoute) {
    console.log(smileysService.getSmiley() + ' from ArtworkDetailComponent constructor');
    this.usecase = this.router.getCurrentNavigation()?.extras.state?.artworkDetailUsecase;
    this.artworkId = this.route.snapshot.paramMap.get('artworkId');
    console.log('current navigation: ' + this.router.getCurrentNavigation());
    console.log('usecase: ' + this.usecase);
  }

  ngOnInit(): void {
    if (this.artworkId) {
      this.artwork = this.artworkService.getArtworkById(this.artworkId);
    }
  }

  onEdit(): void {
    console.log(this.smileysService.getSmiley());
    console.log('Going to edit the artwork: ' + this.artwork);
    this.usecase = this.detailUsecase.adminUpdate;

    // this.router.navigate(['artworks', this.artwork.id], {
    //   state: { artworkDetailUsecase: this.detailUsecase.adminUpdate }
    // });

    console.log(this.usecase);
  }

}
