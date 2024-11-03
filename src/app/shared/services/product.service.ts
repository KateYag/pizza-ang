import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = [
    // {
    //   id: 1,
    //   image: 'Layer%202.png',
    //   title: 'Мясная Делюкс',
    //   description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы'
    // },
    // {
    //   id: 2,
    //   image: 'Layer%203.png',
    //   title: 'Морская Премиум',
    //   description: 'Перец, сыр, креветки, кальмары, мидии, лосось'
    // },
    // {
    //   id: 3,
    //   image: 'Layer%204.png',
    //   title: 'Бекон и Сосиски',
    //   description: 'Бекон, сыр, сосиски, ананас, томатная паста'
    // },
    // {
    //   id: 4,
    //   image: 'Layer%205.png',
    //   title: 'Куриная Делюкс',
    //   description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'
    // },
    // {
    //   id: 5,
    //   image: 'Layer%206.png',
    //   title: 'Барбекю Премиум',
    //   description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили'
    // },
    // {
    //   id: 6,
    //   image: 'Layer%207.png',
    //   title: 'Пепперони Дабл',
    //   description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная'
    // },
    // {
    //   id: 7,
    //   image: 'Layer%208.png',
    //   title: 'Куриное трио',
    //   description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для  пиццы'
    // },
    // {
    //   id: 8,
    //   image: 'Layer%209.png',
    //   title: 'Сырная',
    //   description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный'
    // },
  ];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
 //ajax
    return this.http.get<ProductType[]>(environment.apiURL + 'pizzas');
  }

  getProduct(id: number): Observable<ProductType> {

    return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`);
 //ajax
    //return this.products.find(item => (item.id === id));
  }

  createOrder(data: {product: string, address: string, phone: string}) {
    return this.http.post<{ success: boolean, message?: string }>(environment.apiURL + `order-pizza`, data);
  }
}
