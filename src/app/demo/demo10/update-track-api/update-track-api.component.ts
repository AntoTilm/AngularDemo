import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/shared/models/track';
import { TrackAPIService } from 'src/app/shared/services/track-api.service';

@Component({
  selector: 'app-update-track-api',
  templateUrl: './update-track-api.component.html',
  styleUrls: ['./update-track-api.component.scss']
})
export class UpdateTrackApiComponent implements OnInit {
  trackForm : FormGroup;
  trackId : number;

    constructor(private _fb : FormBuilder, 
              private _trackApiService : TrackAPIService,
              private _router : Router,
              private _activeRoute : ActivatedRoute) {

      //Construction formulaire
      this.trackForm = this._fb.group({
        title : [null],
        duration : [0],
        genre : [''],
        cover : [null],
        artists : this._fb.array([])
      });

      //Récupération id
      this.trackId = +this._activeRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
      //Récupérer la track et mettre à jour le formulaire
      this._trackApiService.getById(this.trackId).subscribe({
        next : (track) => {
          //Pour récréer tous les input artists :
          track.artists.forEach(a => this.addArtist())
          //On met ensuite à jour le formulaire avec patchValue
          this.trackForm.patchValue({
            title : track.title,
            duration : track.duration,
            genre : track.genre,
            cover : track.cover,
            artists : track.artists
          });
        },
        error : () => {
          this._router.navigateByUrl('/notfound');
        }
      })

    }

    get artists() : FormArray {
      return this.trackForm.get('artists') as FormArray;
    }

    addArtist() : void {
      this.artists.push(this._fb.control(null));
    }

    removeArtist(indice : number) : void {
      this.artists.removeAt(indice);
    }

    updateTrack() : void {
      this._trackApiService.update(this.trackId , this.trackForm.value).subscribe({
        complete : () => {
          //Après modif dans la db
          this._router.navigateByUrl('/demo/demo10');
        }
      });
    }
}
