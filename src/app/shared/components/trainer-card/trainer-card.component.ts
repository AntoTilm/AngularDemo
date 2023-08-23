import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trainer } from '../../models/trainer';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.scss']
})
export class TrainerCardComponent {
  // trainer! -> Autoriser le fait que potentiellement la propriété trainer soit undefined
  @Input() trainer! : Trainer;

  @Output() onSelectTrainer : EventEmitter<Trainer> = new EventEmitter<Trainer>();

  sendTrainer() : void {
    this.onSelectTrainer.emit(this.trainer);
  }
}
