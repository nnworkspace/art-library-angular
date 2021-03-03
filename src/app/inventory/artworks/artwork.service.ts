import {SmileysService} from '../../_common/smileys.service';
import metas from '../../../assets/example_data_jsons/artworkMetas.json';
import artworkJson from '../../../assets/example_data_jsons/get_artwork_by_id_response.json';
import {Injectable} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {ArtworkMeta} from '../../_model/artworkMeta';
import {Artwork} from '../../_model/artwork';

@Injectable({ providedIn: 'root' })
export class ArtworkService {
  artworksChange = new Subject<ArtworkMeta[]>();

  private artworkMetas: ArtworkMeta[] = metas;
  private artwork: Artwork = artworkJson;
  // private ao = new Observable<Artwork>(artworkJson);

  constructor( private smileysService: SmileysService ) {
    console.log(smileysService.getSmiley() + ' from ArtworkService constructor: ');
    console.log('artwork from static json file: ');
    console.log(this.artwork);
  }

  getArtworkMetas(): ArtworkMeta[] {
    return this.artworkMetas.slice();
  }

  getArtworkById(artworkId: string): Artwork {
    console.log('smileysService.getSmiley() in ArtworkService.getArtworkById: ');
    console.log('artworkId: ' + artworkId);
    return this.artwork;
  }
}
