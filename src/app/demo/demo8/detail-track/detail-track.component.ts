import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Track } from 'src/app/shared/models/track';
import { TrackService } from 'src/app/shared/services/track.service';

@Component({
  selector: 'app-detail-track',
  templateUrl: './detail-track.component.html',
  styleUrls: ['./detail-track.component.scss']
})
export class DetailTrackComponent {
  track : Track | undefined;

  constructor(private _activeRoute : ActivatedRoute, private _trackService : TrackService, private _router : Router ) {
    // let trackId = parseInt(this._activeRoute.snapshot.params["id"]);
    let trackId = +this._activeRoute.snapshot.params["id"]; 

    this.track = this._trackService.getById(trackId);
    if(!this.track) {
      this._router.navigateByUrl('/notfound');
    }
  }
}
