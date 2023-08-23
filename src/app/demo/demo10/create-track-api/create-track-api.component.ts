import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TrackAPIService } from 'src/app/shared/services/track-api.service';

@Component({
  selector: 'app-create-track-api',
  templateUrl: './create-track-api.component.html',
  styleUrls: ['./create-track-api.component.scss']
})
export class CreateTrackApiComponent {
  trackForm : FormGroup;

  constructor(private _fb : FormBuilder, 
            private _router : Router,
            private _trackApiService : TrackAPIService) {
    this.trackForm = this._fb.group({
      title : [null],
      duration : [0],
      genre : [''],
      cover : [null],
      artists : this._fb.array([])
    });
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

  addTrack() : void {
    //normalement on vérif si tout valide mais là osef (bon osef pas, on envoie quand même le truc en bd là, faut vérif dans un monde parfait)
    this._trackApiService.create(this.trackForm.value).subscribe({
      complete : () => {
        //Après ajout dans la liste
        // ! On attend bien que la requête soit terminée avant de faire la redirection, sinon on redirige potentiellement avant que l'ajout soit fait
        this._router.navigateByUrl('/demo/demo10');
      }
    })
    
  }
}
