import { Component } from '@angular/core';
import { Track } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component {
  trackList : Track[] = [];

  constructor(private _trackService : TrackService) {
    this.trackList = this._trackService.getAll();
  }

  delete(id : number) {
    this._trackService.delete(id);
    this.trackList = this._trackService.getAll();
  }


}
