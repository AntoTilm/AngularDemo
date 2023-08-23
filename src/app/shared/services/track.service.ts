import { Injectable } from '@angular/core';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private _tracks : Track[] = [
    { id : 1, title : 'Brother', duration : 182,  cover : 'https://i1.sndcdn.com/artworks-000154427194-ou4khr-t500x500.jpg', artists : ['Rilès'], genre : 'Pop'},
    { id : 2, title : 'VOICES', duration : 156,  cover : 'https://i1.sndcdn.com/artworks-000627185959-vukj0q-t500x500.jpg', artists : ['Skye', 'XXXTENTACION'], genre : 'Rap'},
  ]

  constructor() { }

  getAll() : Track[] {
    return this._tracks;
  }

  getById(id : number) : Track | undefined {
    return this._tracks.find(track => track.id === id);
  }

  create(track : Track) : void {
    // this._tracks.map(track => track.id) => transforme le tableau de track en un tableau d'id [1, 2, 4, 6]
    // ...tableau -> ... : Spread operator => destructure le tableau (ici [1, 2, 4, 6] deviendrait 1, 2, 4, 6)
    track.id = Math.max(...this._tracks.map(track => track.id)) + 1;
    this._tracks.push(track);
  }

  update(id : number, track : Track) : void {
    let trackToUpdate : Track | undefined = this._tracks.find(track => track.id === id);
    //Si track trouvée : modif
    if(trackToUpdate) {
      trackToUpdate.title = track.title;
      trackToUpdate.duration = track.duration;
      trackToUpdate.genre = track.genre;
      trackToUpdate.cover = track.cover;
      trackToUpdate.artists = track.artists;
    }
  }

  delete(id : number) : void {
    this._tracks = this._tracks.filter(track => track.id !== id);
  }

}
