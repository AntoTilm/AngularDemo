import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackAPIService {

  private _url : string = 'http://localhost:3000/tracks/'

  constructor(private _httpClient : HttpClient) { }

  getAll() : Observable<Track[]> {
    return this._httpClient.get<Track[]>(this._url);
  }
  
  getById(id : number) : Observable<Track> {
    return this._httpClient.get<Track>(this._url+id);
  }

  create(track : Track) : Observable<Track> {
    return this._httpClient.post<Track>(this._url, track);
  }

  update(id : number, track : Track) : Observable<Track> {
    return this._httpClient.put<Track>(this._url+id, track);
  }

  delete(id : number) : Observable<Track> {
    return this._httpClient.delete<Track>(this._url+id);
  }
}
