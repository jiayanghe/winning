import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductRoutingModule } from './product.routing';
import { ProductListResolver } from './resolvers/product-list.resolver';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ProductListResolver
  ]
})
export class ProductModule { }
