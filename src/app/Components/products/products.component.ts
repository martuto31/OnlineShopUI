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
  product: IProduct = {name: '', id: 0, price: 10, description: 'asd', productTarget: 0, productType: 0, pictureData: ''}
  selectedImage: File | null = null;

  constructor(private productService: ProductService) { }

  onSubmit(): void {
    const formData: FormData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('productType', this.product.productType.toString());
    formData.append('productTarget', this.product.productTarget.toString());
    if(this.selectedImage != null)
    {
      formData.append('image', this.selectedImage);
    }

    this.productService.addProduct(formData).subscribe(
      (response) => {
        console.log(this.product);
      },
      (error) => {
        console.log(this.product);
        console.log(error);
      }
    );
  }
  
  onImageChange(event: any): void {
    const file = event.target.files[0];
    this.selectedImage = file;
  }

  getProductById(id: number): any{
    this.productService.getProductById(id).subscribe((product: IProduct) =>{
      this.product = product;
    });
  }
}
