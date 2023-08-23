import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component {
  productName : string = '';

  constructor(private _productService : ProductService) {

  }

  addProduct() : void { 
    if(this.productName.trim().length > 0) {

      this._productService.addProduct({ name : this.productName, quantity : 0 });
      this.productName = '';
    }
  }
}
