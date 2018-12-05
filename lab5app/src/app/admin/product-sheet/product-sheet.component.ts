import { Component, OnInit } from '@angular/core';
import { CategoryService } from './../../category.service';
import { ProductService } from './../../product.service';

@Component({
  selector: 'app-product-sheet',
  templateUrl: './product-sheet.component.html',
  styleUrls: ['./product-sheet.component.css']
})

export class ProductSheetComponent implements OnInit {
  categories_;
  
  constructor( categoryService: CategoryService, private productService : ProductService ) { 
    this.categories_ = categoryService.getCategoriesList();
    console.log ("The following will display categories_");
    console.log(this.categories_);
  }
  
  save(product){
    this.productService.newProduct(product);
    console.log(product);
  }
ngOnInit() { }

}

/* The CategoryService list is then being called upon which the ProductSheetComponent will store the 
data in member "categories_"
I then intend to use categories_ to display it in the
"/lab5app/src/app/admin/product-sheet/product-sheet.component.html"
*/