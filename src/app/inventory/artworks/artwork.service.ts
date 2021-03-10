import {SmileysService} from '../../_common/smileys.service';
import metas from '../../../assets/example_data_jsons/artworkMetas.json';
import artworkJson1 from '../../../assets/example_data_jsons/get_artwork_by_id_response_1.json';
import artworkJson2 from '../../../assets/example_data_jsons/get_artwork_by_id_response_2.json';
import {Injectable} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {Artwork, ArtworkMeta} from '../../_gen/inventory';


@Injectable({ providedIn: 'root' })
export class ArtworkService {
  artworksChange = new Subject<ArtworkMeta[]>();

  private artworkMetas: ArtworkMeta[] = metas;
  private artwork1: Artwork = artworkJson1;
  private artwork2: Artwork = artworkJson2;
  // private ao = new Observable<Artwork>(artworkJson);

  constructor( private smileysService: SmileysService ) {
    console.log(smileysService.getSmiley() + ' from ArtworkService constructor: ');
    console.log('artwork 1 from static json file: ');
    console.log(this.artwork1.title);
    console.log('artwork 2 from static json file: ');
    console.log(this.artwork2.title);
  }

  getArtworkMetas(): ArtworkMeta[] {
    return this.artworkMetas.slice();
  }

  getArtworkById(artworkId: string): Artwork {
    console.log('smileysService.getSmiley() in ArtworkService.getArtworkById: ');
    console.log('artworkId: ' + artworkId);
    if (artworkId === 'botticelli-birth-of-venus'){
      return this.artwork2;
    }
    return this.artwork1;
  }
}
