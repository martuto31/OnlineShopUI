import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductColors } from 'src/app/Models/productColors';
import { ProductSizes } from 'src/app/Models/productSizes';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {
  productId: number = this.route.snapshot.params['id'];
  product: IProduct = {name: '', id: this.productId, price: 0, description: '', productTarget: 0, productType: 0, picturesData: [], productSizes: [], productColors: []}

  productSizes: ProductSizes[] = [];
  selectedSizes: ProductSizes[] = [];

  productColors: ProductColors[] = [];
  selectedColors: ProductColors[] = [];

  selectedImages: FileList | null = null;
  productForm: FormGroup;

  constructor(private productService: ProductService, private imageCompress: NgxImageCompressService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      sizes: this.formBuilder.array([])
    });
   }

  ngOnInit(): void {
    this.getProductSizes();
    this.getProductColors();
  }

  onSubmit(): void {
    const formData: FormData = new FormData();
    formData.append('id', this.productId.toString());
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

    if(this.selectedColors && this.selectedColors.length > 0){
      for(let i = 0; i < this.selectedColors.length; i++){
        formData.append('productColors', this.selectedColors[i].id.toString())
      }
    }

    if(this.selectedSizes && this.selectedSizes.length > 0){
      for(let i = 0; i < this.selectedSizes.length; i++){
        formData.append('productSizes', this.selectedSizes[i].id.toString())
      }
    }

    this.productService.editProduct(formData).subscribe(
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

  getProductSizes(): any{
    this.productService.getAllProductSizes().subscribe((productSizes: ProductSizes[]) => {
      this.productSizes = productSizes;
    })
  }

  getProductColors(): any{
    this.productService.getAllProductColors().subscribe((productColors: ProductColors[]) => {
      this.productColors = productColors;
    })
  }
}
