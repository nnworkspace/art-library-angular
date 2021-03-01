import metas from '../../../assets/example_data_jsons/artworkMetas.json';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {ArtworkMeta} from '../../_model/artworkMeta';

@Injectable({ providedIn: 'root' })
export class ArtworkService {
  artworksChange = new Subject<ArtworkMeta[]>();

  private artworkMetas: ArtworkMeta[] = metas;

  constructor() {}

  getArtworkMetas(): ArtworkMeta[] {
    return this.artworkMetas.slice();
  }
}
