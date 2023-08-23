import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { SharedModule } from '../shared/shared.module';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { EnfantComponent } from './demo4/enfant/enfant.component';
import { Demo5Component } from './demo5/demo5.component';
import { Demo6Component } from './demo6/demo6.component';
import { Demo8Component } from './demo8/demo8.component';
import { CreateTrackComponent } from './demo8/create-track/create-track.component';
import { DetailTrackComponent } from './demo8/detail-track/detail-track.component';
import { UpdateTrackComponent } from './demo8/update-track/update-track.component';
import { Demo9Component } from './demo9/demo9.component';
import { HttpClientModule } from '@angular/common/http';
import { Demo10Component } from './demo10/demo10.component';
import { CreateTrackApiComponent } from './demo10/create-track-api/create-track-api.component';
import { UpdateTrackApiComponent } from './demo10/update-track-api/update-track-api.component'


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    EnfantComponent,
    Demo5Component,
    Demo6Component,
    Demo8Component,
    CreateTrackComponent,
    DetailTrackComponent,
    UpdateTrackComponent,
    Demo9Component,
    Demo10Component,
    CreateTrackApiComponent,
    UpdateTrackApiComponent,
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    // FormsModule, //Pour pouvoir utiliser ngModel
    SharedModule, //Importe tout ce qu'il y a dans le module partagé,
    HttpClientModule
  ],
  bootstrap : [DemoComponent]
})
export class DemoModule { }
