import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CartService} from "../../shared/services/cart.service";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) { }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  ngOnInit(): void {
  //  if (this.cartService.product-card) {
    //  this.formValues.productTitle = this.cartService.product-card;
   // }



    // const productParam = this.activatedRoute.snapshot.queryParamMap.get('product');
    // if (productParam) {
    //   this.formValues.productTitle = productParam;
    // }

    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      console.log('Received product:', params['product']);
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',

  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    this.subscriptionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ!');

          this.formValues = {
            productTitle: '',
            address: '',
            phone: '',

          }
        } else  {
          alert('Ошибка!')
        }
      })
  }
}
