import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";
import {ProductType} from "../../../../types/product.type";


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;
  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: ''
    };
  }

  ngOnInit(): void {
  }


}
