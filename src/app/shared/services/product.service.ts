import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productsList : Product[] = [
    { name : 'Patates', quantity : 12 }
  ]

  constructor() { }

  getAll() : Product[] {
    return this._productsList;
  }

  addProduct(product : Product) : void {

    let foundProduct : Product | undefined = this._productsList.find(p => p.name.trim().toLowerCase() === product.name.trim().toLowerCase());

    //Si foundProduct n'est pas undefined
    if(foundProduct) {        
       foundProduct.quantity++;
    }
    //Sinon, on l'ajoute dans la liste
    else {

      this._productsList.push({ name : product.name.trim(), quantity : 1});

    }
  }

  deleteProduct(product : Product) : void {
    //Attention, quand on utilise le filter, on créer un nouveau tableau avec une adresse mémoire différente
    //Quand on fait this._productsList = dnesf.filter, on modifie donc l'adresse mémoire de notre tableau côté service
    //Le tableau côté component et côté service ne partagent donc plus la même référence
    this._productsList = this._productsList.filter(p => p !== product)
  }

  upQty(product : Product) : void {
    product.quantity++;
  }

  downQty(product : Product) : void {
    product.quantity--;
    if(product.quantity === 0) {
      this.deleteProduct(product);
    }
  }

}
