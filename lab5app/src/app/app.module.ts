import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';


import { RouterModule } from '@angular/router';
import { ProductSheetComponent } from './admin/product-sheet/product-sheet.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { DMCACopyrightComponent } from './dmca-copyright/dmca-copyright.component';
import { EditDMCAComponent } from './edit-dmca/edit-dmca.component';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessfulComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductSheetComponent,
    ProductIdComponent,
    DMCACopyrightComponent,
    EditDMCAComponent
  ],
  imports: [
     ReactiveFormsModule,
     FormsModule,
     BrowserModule,
     AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireDatabaseModule,
     AngularFireAuthModule,
     NgbModule.forRoot(),
     RouterModule.forRoot([
       {path:'', component: ProductsComponent},
       {path:'products', component: ProductsComponent},
       {path:'shopping-cart', component: ShoppingCartComponent},
       {path:'checkout', component: CheckoutComponent },//, canActivate: [AuthGuardService]   protect the route checkout
       {path:'order-success', component: OrderSuccessfulComponent},
       {path:'login', component: LoginComponent},
       {path:'admin/products', component: AdminProductsComponent},
       {path:'admin/orders', component: AdminOrdersComponent},
       {path:'my/orders', component: MyOrdersComponent},
       {path:'admin/products/new' , component: ProductSheetComponent},
       {path:'copyright', component: DMCACopyrightComponent },
       {path:'edit-copyright', component: EditDMCAComponent}

       ])
  ],
  providers: [
    //CategoryService
    //,AuthGuardService // implementation of the service auth guard 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
