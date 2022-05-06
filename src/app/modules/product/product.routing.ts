import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListingComponent } from "./components/product-listing/product-listing.component";
import { ProductListResolver } from "./resolvers/product-list.resolver";



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'listing'
    },
    {
      path: 'listing',
      component: ProductListingComponent,
      resolve: {
        products: ProductListResolver
      }
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
