import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/IProduct';
import { ProductSizes } from '../Models/productSizes';
import { ProductColors } from '../Models/productColors';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiProductUrl = 'https://localhost:7260/api/Product';

  constructor(private http: HttpClient) { }

  private token = localStorage.getItem('token');
  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  private options = { headers: this.headers };

  getAllProductsByType(type: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiProductUrl}/GetProductsByType?type=` + type);
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.apiProductUrl}/GetProductById?id=${id}`);
  }
  
  getAllProductSizes(): Observable<ProductSizes[]> {
    return this.http.get<ProductSizes[]>(`${this.apiProductUrl}/GetAllProductSizes`);
  }

  getAllProductColors(): Observable<ProductColors[]>{
    return this.http.get<ProductColors[]>(`${this.apiProductUrl}/GetAllProductColors`);
  }

  addProduct(formData: FormData) {
    return this.http.post(`${this.apiProductUrl}/AddProduct`, formData, this.options);
  }

  editProduct(formData: FormData){
    return this.http.put(`${this.apiProductUrl}/UpdateProduct`, formData, this.options);
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.apiProductUrl}/RemoveProduct?id=${id}`, this.options);
  }
}
