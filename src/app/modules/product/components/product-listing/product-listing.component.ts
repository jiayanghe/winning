import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product.interface';
import { ProductDataService } from '../../services/product-data.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  products: Product[] = []

  constructor(
    private productDataSvc: ProductDataService,
    private route: ActivatedRoute
  ) {
    this.products = this.route.snapshot.data.products
   }

  ngOnInit(): void {
  }


}
