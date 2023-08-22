import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2Component } from './exo2/exo2.component';
import { Exo3Component } from './exo3/exo3.component';
import { Exo5Component } from './exo5/exo5.component';
import { CreateFanComponent } from './exo5/create-fan/create-fan.component';
import { DetailsFanComponent } from './exo5/details-fan/details-fan.component';
import { UpdateFanComponent } from './exo5/update-fan/update-fan.component';
import { Exo6Component } from './exo6/exo6.component';

const routes: Routes = [
  { path : "exo1", component : Exo1Component },
  { path : "exo2", component : Exo2Component },
  { path : "exo3", component : Exo3Component },
  { path : "exo4" , redirectTo : "/"},
  { path : "exo5" , component : Exo5Component },
  { path : "exo5/create" , component : CreateFanComponent },
  { path : "exo5/details/:id", component : DetailsFanComponent },
  { path : "exo5/update/:id", component : UpdateFanComponent},
  { path : "exo6", component : Exo6Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
