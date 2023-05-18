import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<IProduct[]>(`${this.apiProductUrl}/GetProductsByType?type=` + type);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiProductUrl}/GetProductById?id=${id}`)
  }

  

  addProduct(formData: FormData) {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(`${this.apiProductUrl}/AddProduct`, formData);
  }
}
