import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products_: any;
  constructor(productService : ProductService) {
     this.products_ = productService.getproducts();
  } 
  
  
  
  ngOnInit() {
  }

}
