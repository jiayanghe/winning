import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(route: string = ''): Observable<Product[]> {
    const url = '../../../../../assets/MOCK_DATA.json'
    return this.http.get<Product[]>(url).pipe(take(1));
  }
}
