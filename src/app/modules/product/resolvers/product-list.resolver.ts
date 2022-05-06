import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDataService } from '../services/product-data.service';
import { Product } from '../product.interface';

@Injectable()
export class ProductListResolver implements Resolve<Product> {

  constructor(
    private dataSvc: ProductDataService,
  ) { }


  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | any {

    return this.dataSvc.getProducts()
  }

}
