import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';  //././/enviornments.enviornment
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

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
    LoginComponent
  ],
  imports: [
     BrowserModule,
     AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireDatabaseModule,
     AngularFireAuthModule,
     NgbModule.forRoot(),
     RouterModule.forRoot([
       {path:'', component: HomeComponent},
       {path:'products', component: ProductsComponent},
       {path:'shopping-cart', component: ShoppingCartComponent},
       {path:'checkout', component: CheckoutComponent},
       {path:'order-success', component: OrderSuccessfulComponent},
       {path:'login', component: LoginComponent},
       {path:'admin/products', component: AdminProductsComponent},
       {path:'admin/orders', component: AdminOrdersComponent}
       ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
