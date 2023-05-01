import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService)
  {

  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
