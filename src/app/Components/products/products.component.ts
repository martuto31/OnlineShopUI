import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductSizes } from 'src/app/Models/productSizes';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  product: IProduct = {name: '', id: 0, price: 0, description: '', productTarget: 0, productType: 0, picturesData: [], productSizes: [], productColors: []}

  productSizes: ProductSizes[] = [];
  selectedSizes: ProductSizes[] = [];

  productColors: number[] = [];
  selectedImages: FileList | null = null;
  productForm: FormGroup;

  constructor(private productService: ProductService, private imageCompress: NgxImageCompressService, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      sizes: this.formBuilder.array([])
    });
   }

  ngOnInit(): void {
    this.getProductSizes();
  }

  onSubmit(): void {
    console.log(this.selectedSizes);
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
      },
      (error) => {
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
  getProductSizes(): any{
    this.productService.getAllProductSizes().subscribe((productSizes: ProductSizes[]) => {
      this.productSizes = productSizes
    })
  }

  // getSelectedProductSizeIds() {
  //   return this.productSizes
  //     .filter(size => size.selected)
  //     .map(size => size.id);
  // }
}
