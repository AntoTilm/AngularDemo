import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  listToShow : Product[] = [];

  constructor(private _productService : ProductService) {
    this.listToShow = this._productService.getAll();
  }

  down(product : Product) : void {
    this._productService.downQty(product);
    this.listToShow = this._productService.getAll();
  }
  
  up(product : Product) : void {
    this._productService.upQty(product);
  }
  
  delete(product : Product) : void {
    this._productService.deleteProduct(product);
    //Il faut qu'on récupère la liste mise à jour
    this.listToShow = this._productService.getAll(); 
  }
}
