import { Component } from '@angular/core';
import { WomenProductsConstant } from '../constants/women-products-type';
import { IProduct } from 'src/app/Models/IProduct';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.css']
})
export class WomenProductsComponent {
  constructor() {}

  products: IProduct[] = [];

  TShirtValue: string = WomenProductsConstant.TShirts;
  HoodiesValue: string = WomenProductsConstant.Hoodies;
  TrousersValue: string = WomenProductsConstant.Trousers;
  ShortsValue: string = WomenProductsConstant.Shorts;
}
