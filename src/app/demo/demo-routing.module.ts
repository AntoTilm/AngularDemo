import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo8Component } from './demo8/demo8.component';
import { CreateTrackComponent } from './demo8/create-track/create-track.component';
import { DetailTrackComponent } from './demo8/detail-track/detail-track.component';
import { UpdateTrackComponent } from './demo8/update-track/update-track.component';
import { Demo9Component } from './demo9/demo9.component';
import { Demo10Component } from './demo10/demo10.component';
import { CreateTrackApiComponent } from './demo10/create-track-api/create-track-api.component';
import { UpdateTrackApiComponent } from './demo10/update-track-api/update-track-api.component';

const routes: Routes = [
  //Liste de tous les liens enfants de Demo
  { path : "demo1" , component : Demo1Component },
  { path : "demo2" , component : Demo2Component },
  { path : "demo3" , component : Demo3Component },
  { path : "demo4" , component : Demo4Component },
  { path : "demo5" , component : Demo5Component },
  { path : "demo6" , component : Demo6Component },
  { path : "demo8", component : Demo8Component },
  { path : "demo8/create" , component : CreateTrackComponent },
  { path : "demo8/detail/:id", component : DetailTrackComponent },
  { path : "demo8/update/:id", component : UpdateTrackComponent },
  { path : "demo9", component : Demo9Component },
  { path : "demo10" , component : Demo10Component },
  { path : "demo10/create", component : CreateTrackApiComponent },
  { path : "demo10/update/:id", component : UpdateTrackApiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
