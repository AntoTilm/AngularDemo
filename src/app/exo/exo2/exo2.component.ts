import { Component } from '@angular/core';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss'],
})
export class Exo2Component {
  productsList : Product[] = [
    { name : 'Banane', quantity : 3 }
  ];

  productName : string = '';

  addProduct() : void {
    //Si le produit n'est pas vide
    //trim() -> Enlève tous les espaces blancs à gauche et à droite de la chaine (si chaine avec juste des espaces, enlève tous les espaces)
    if(this.productName.trim().length > 0) {

      //Si le produit est déjà dans la liste
      //la méthode find, renvoie le produit, si trouvé, sinon, undefined
      let foundProduct : Product | undefined = this.productsList.find(p => p.name.trim().toLowerCase() === this.productName.trim().toLowerCase());
      //Si foundProduct n'est pas undefined
      if(foundProduct) {        
         foundProduct.quantity++;
      }
      //Sinon, on l'ajoute dans la liste
      else {

        this.productsList.push({ name : this.productName.trim(), quantity : 1});

      }
      this.productName = '';

      console.log(this.productsList);

    }
    
  }

  upProductQty(product : Product) : void {
    product.quantity++;
  }

  downProductQty(product : Product) : void {
    product.quantity--;
    if(product.quantity === 0) {
      this.deleteProduct(product);
    }
  }

  deleteProduct(product : Product) : void {
    //On remplace la liste par notre liste filtrée (sans le produit qui est égal à celui reçu en param)
    this.productsList = this.productsList.filter(p => p !== product)
  }
}
