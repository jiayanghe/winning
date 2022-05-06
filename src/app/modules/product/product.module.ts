import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductRoutingModule } from './product.routing';



@NgModule({
  declarations: [
    ProductListingComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
