import { Component } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] = [];
  product: IProduct = {name: '', id: 0, price: 10, description: 'asd', productTarget: 0, productType: 0, picturesData: [], productSizes: [], productColors: []}
  selectedImages: FileList | null = null;

  constructor(private productService: ProductService, private imageCompress: NgxImageCompressService) { }

  onSubmit(): void {
    const formData: FormData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('productType', this.product.productType.toString());
    formData.append('productTarget', this.product.productTarget.toString());

    if (this.selectedImages && this.selectedImages.length > 0) {
      for (let i = 0; i < this.selectedImages.length; i++) {
        formData.append('images', this.selectedImages[i]);
      }
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
  
  onFileChange(event: any): void {
    this.selectedImages = event.target.files;
  }

  getProductById(id: number): any{
    this.productService.getProductById(id).subscribe((product: IProduct) =>{
      this.product = product;
    });
  }

  // compressImage(file: File): void {
  //   const reader = new FileReader();
  //   reader.onload = (event: any) => {
  //     const dataUrl = event.target.result;
  //     this.imageCompress.compressFile(dataUrl, -1, 50, 50).then(result => {
  //       // Compressed image is available in 'result' variable
  //       console.log(result);
  //     });
  //   };
    //reader.readAsDataURL(file);
  // }

}
