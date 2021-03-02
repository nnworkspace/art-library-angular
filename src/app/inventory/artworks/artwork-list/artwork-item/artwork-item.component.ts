import {SmileysService} from '../../../../_common/smileys.service';
import {Component, Input, OnInit} from '@angular/core';
import {ArtworkMeta} from '../../../../_model/artworkMeta';
import {ArtworkItemUsecaseEnum} from '../../artwork-item-usecase-enum.model';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.scss']
})
export class ArtworkItemComponent implements OnInit {
  @Input() artwork!: ArtworkMeta;
  @Input() index!: number;
  @Input() useCase = ArtworkItemUsecaseEnum.viewOnly;

  constructor(private smileysService: SmileysService) {}

  ngOnInit(): void {
  }

  onItemClick(artwork: ArtworkMeta): void {
    console.log(this.smileysService.getSmiley());
    console.log(artwork);
  }
}
