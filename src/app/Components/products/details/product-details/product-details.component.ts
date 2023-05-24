import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  productId: number = this.route.snapshot.params['id'];
  product: IProduct = {name: '', id: 0, price: 10, description: 'asd', productTarget: 0, productType: 0, picturesData: [], productSizes: [], productColors: []}

  ngOnInit(): void {
    this.getProductById(this.productId);
    console.log(this.product.productSizes)
  }

  getProductById(id: number): any{
    this.productService.getProductById(id).subscribe((product: IProduct) =>{
      this.product = product;
    });
  }

  getBase64ImageUrl(base64String: string): string {
    return `data:image/jpeg;base64,${base64String}`;
  }

  enumToArr(value: any): any[] {
    const keys = Object.keys(value);
    return keys.slice(keys.length / 2);
  }
}
