import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    TrainerCardComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule, //Pour utiliser le ngModel
    ReactiveFormsModule
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    TrainerCardComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
