import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Track } from 'src/app/shared/models/track';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {
  registerForm : FormGroup;
  loginForm : FormGroup;

  fakeBEurlTrack : string = "http://localhost:3000/660/tracks";
  fakeBEurlRegister : string = "http://localhost:3000/users";
  fakeBEurlLogin : string = "http://localhost:3000/login";

  tracks : Track[] = [];
  errorTracks : string = '';

  constructor(private _fb : FormBuilder, private _httpClient : HttpClient) {
    this.registerForm = this._fb.group({
      lastname : [null, [Validators.required]],
      firstname : [null, [Validators.required]],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]]
    });

    this.loginForm = this._fb.group({
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
      this.getAll();
  }

  getAll() : void {
    this.errorTracks = '';

    //Ça c'est quand on n'a pas d'Interceptor, on va devoir rajouter à la main le token dans chaque requête qui a besoin du Token
    // let options = {
    //   headers : {
    //     'Authorization' : `Bearer ${localStorage.getItem('apiToken')}`
    //   }
    // }
    this._httpClient.get<Track[]>(this.fakeBEurlTrack /*, options*/).subscribe({
      next : (value) => { this.tracks = value },
      error : (error) => { 
        console.log(error);         
        if(error.status === 401) {
          this.errorTracks = 'Vous devez être connecté.e pour voir les tracks';
        }
       }
      
    })
  }

  register() : void {
    if(this.registerForm.valid) {
      //Get -> Récupérer des entités
      //Post -> Envoyer des données ou ajouter une entité
      //Put et Patch -> Modifier données
      //Delete -> Supprimer une entité
      this._httpClient.post(this.fakeBEurlRegister, this.registerForm.value).subscribe(() => {
        console.log('ok');
        this.registerForm.reset();
      })
    }
  }

  login() : void {
    if(this.loginForm.valid) {
      this._httpClient.post(this.fakeBEurlLogin, this.loginForm.value).subscribe({
        next : (res : any) => {
          console.log(res);
          //On stocke le token dans le localStorage
          localStorage.setItem('apiToken', res.accessToken);
        }
      })
    }
  }

  moveToken() : void {
    localStorage.removeItem('apiToken');
  }
}
