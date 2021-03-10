import {SmileysService} from '../../../../_common/smileys.service';

import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArtworkItemUsecaseEnum} from '../../artwork-item-usecase-enum.model';
import {ArtworkDetailUsecaseEnum} from '../../artwork-detail-usecase-enum.model';
import {ArtworkMeta} from '../../../../_gen/inventory';

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
              private router: Router) {}

  ngOnInit(): void {
  }

  onItemView(): void {
    console.log(this.smileysService.getSmiley());
    console.log('Going to view the artwork: ' + this.artwork);
    this.router.navigate(['artworks', this.artwork.id], {
      state: { artworkDetailUsecase: this.detailUsecase.adminRead }
    });
  }

  onItemEdit(): void {
    console.log(this.smileysService.getSmiley());
    console.log('Going to edit the artwork: ' + this.artwork);
    this.router.navigate(['artworks', this.artwork.id], {
      state: { artworkDetailUsecase: this.detailUsecase.adminUpdate }
    });
  }
}
