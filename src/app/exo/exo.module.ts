import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo1Component } from './exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './exo2/exo2.component';
import { ShowListComponent } from './exo2/show-list/show-list.component';
import { FormsModule } from '@angular/forms';
import { Exo3Component } from './exo3/exo3.component';
import { ShoppingListComponent } from './exo3/shopping-list/shopping-list.component';
import { Exo5Component } from './exo5/exo5.component';
import { CreateFanComponent } from './exo5/create-fan/create-fan.component';
import { DetailsFanComponent } from './exo5/details-fan/details-fan.component';
import { UpdateFanComponent } from './exo5/update-fan/update-fan.component';
import { Exo6Component } from './exo6/exo6.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo1Component,
    Exo2Component,
    ShowListComponent,
    Exo3Component,
    ShoppingListComponent,
    Exo5Component,
    CreateFanComponent,
    DetailsFanComponent,
    UpdateFanComponent,
    Exo6Component
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule,
    // FormsModule
  ]
})
export class ExoModule { }
