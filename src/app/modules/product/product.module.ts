import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductRoutingModule } from './product.routing';
import { ProductListResolver } from './resolvers/product-list.resolver';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgbModalModule
  ],
  providers: [
    ProductListResolver
  ]
})
export class ProductModule { }
