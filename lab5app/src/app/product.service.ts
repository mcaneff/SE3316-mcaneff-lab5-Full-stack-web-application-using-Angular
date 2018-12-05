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
    return this.db.list('/products');
  }
}
