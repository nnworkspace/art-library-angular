import {Injectable} from '@angular/core';
import faces from '../../assets/coolFaces.json';

@Injectable({ providedIn: 'root' })
export class SmileysService {
  public coolFaces: string[] = faces;

  constructor() {}

  getSmileys(): string[] {
    return this.coolFaces;
  }

  getSmiley(): string {
    const random = Math.floor(Math.random() * this.coolFaces.length);
    return this.coolFaces[random];
  }
}
