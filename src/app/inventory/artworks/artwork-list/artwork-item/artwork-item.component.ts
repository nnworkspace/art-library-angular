import {SmileysService} from '../../../../_common/smileys.service';

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtworkMeta} from '../../../../_model/artworkMeta';
import {ArtworkItemUsecaseEnum} from '../../artwork-item-usecase-enum.model';
import {ArtworkDetailUsecaseEnum} from '../../artwork-detail-usecase-enum.model';
import {ArtworkService} from '../../artwork.service';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.scss']
})
export class ArtworkItemComponent implements OnInit {
  @Input() artwork!: ArtworkMeta;
  @Input() index!: number;
  @Input() useCase = ArtworkItemUsecaseEnum.viewOnly;

  itemUsecase: typeof ArtworkItemUsecaseEnum = ArtworkItemUsecaseEnum;
  detailUsecase: typeof ArtworkDetailUsecaseEnum = ArtworkDetailUsecaseEnum;

  constructor(private smileysService: SmileysService,
              private artworkService: ArtworkService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  onItemClick(artwork: ArtworkMeta): void {
    console.log(this.smileysService.getSmiley());
    console.log(artwork);
    this.router.navigate(['artworks', this.artwork.id], {
      state: { artworkDetailUsecase: this.detailUsecase.adminRead }
    });
  }
}
