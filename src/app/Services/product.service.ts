import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiProductUrl = 'https://localhost:7260/api/Product';

  constructor(private http: HttpClient) { }

  getAllProductsByType(type: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiProductUrl}/GetProductsByType/` + type);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiProductUrl}/GetProductById?id=${id}`)
  }
}
