import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductOrder, ProductOrders } from '../modal/modal.service';;

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = "/api/orders";
  private productOrder: ProductOrder | undefined; // jc add
  private orders: ProductOrders = new ProductOrders();

  //private productOrderSubject = new Subject(); // jc add void to all 3 stat.
  private productOrderSubject = new Subject<void>();
  private ordersSubject = new Subject<void>();
  private totalSubject = new Subject<void>();

  private total: number | undefined; //jc add

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
  }
  saveOrder(order: ProductOrders) {
    return this.http.post(this.ordersUrl, order);
  }
  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next(); // jc add true
  }

  get SelectedProductOrder() {
    return this.productOrder as ProductOrder; // jc
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next(); 
  }

  get ProductOrders() {
    return this.orders;
  }

  get Total() {
    return this.total as number; // jc add
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next();
  }
}