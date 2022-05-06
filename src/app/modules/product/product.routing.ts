import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListingComponent } from "./components/product-listing/product-listing.component";



const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'listing'
    },
    {
      path: 'listing',
      component: ProductListingComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
