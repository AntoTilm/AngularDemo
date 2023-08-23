import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent {
  @Input() listToShow : Product[] = [];

  @Output() onUpQty : EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onDownQty : EventEmitter<Product> = new EventEmitter<Product>();
  @Output() onDeleteProduct : EventEmitter<Product> = new EventEmitter<Product>();

  // sendDownQty(product : Product) : void {
  //   this.onDownQty.emit(product);
  // }
}
