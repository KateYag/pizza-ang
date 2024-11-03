import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: ProductType[] = [];

  loading: boolean = false;

  constructor(private productService: ProductService,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    //this.products = this.productService.getProducts();

    this.loading = true;
    this.productService.getProducts()
      .subscribe(
        {
          next: (data) => {
            this.loading = false;
            this.products = data;
          },
          error: (error) => {
            this.loading = true;
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }

  // public addToCart(title: string): void {
  //   this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  // }

}
