import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgxImageCompressService } from 'ngx-image-compress';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductColors } from 'src/app/Models/productColors';
import { ProductSizes } from 'src/app/Models/productSizes';
import { ProductTarget } from 'src/app/Models/productTarget';
import { ProductTypes } from 'src/app/Models/productTypes';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent {
  productId: number = this.route.snapshot.params['id'];
  product: IProduct = {name: '', id: this.productId, price: 0, description: '', productTarget: 0, productType: 0, picturesData: [], productSizes: [], productColors: []}

  showSuccessMessage: boolean = false;

  productSizes: ProductSizes[] = [];
  selectedSizes: ProductSizes[] = [];

  productColors: ProductColors[] = [];
  selectedColors: ProductColors[] = [];

  productTargets: ProductTarget[] = [{id: 1, target: 'Men'}, {id: 2, target: 'Women'}, {id: 3, target: 'Kids'}];
  selectedTarget: ProductTarget = {id: 0, target: ''};

  productTypes: ProductTypes[] = [{id: 1, type: 'TShirt'}, {id: 2, type: 'Hoodie'}, {id: 3, type: 'Trousers'}, {id: 4, type: 'Shorts'}];
  selectedType: ProductTypes = {id: 0, type: ''};

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
    formData.append('productType', this.selectedType.id.toString());
    formData.append('productTarget', this.selectedTarget.id.toString());

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
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 2000);
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
