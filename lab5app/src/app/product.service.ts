import { Injectable } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  
  newProduct(product){
     return this.db.list('/products').push(product);
  }
  
  getproducts(){
    console.log("The following will return the product list: ");
    console.log(this.db.list('/products'));
    return this.db.list('/products');
  }
}
