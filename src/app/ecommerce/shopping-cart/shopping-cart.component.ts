import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductOrders, Item, ITEMS, ProductOrder } from 'src/app/modal/modal.service';
import { PaymentComponent } from 'src/app/payment/payment.component';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})

export class ShoppingCartComponent implements OnInit {
  orderFinished: boolean;
  orders!: ProductOrders;
  total: number;
  sub!: Subscription;
  radioSel: any;
  priceDelivery!: number;
  radioSelected: string;
  radioSelectedString: string | undefined;
  itemsList: Item[] = ITEMS;
  money!: number;
  @Output() onOrderFinished: EventEmitter<boolean>;

  constructor(private orderService: OrderService, private router: Router,
    public dialog:MatDialog) {
    this.total = 0;
    this.orderFinished = false;
    this.onOrderFinished = new EventEmitter<boolean>();

    this.itemsList = ITEMS;
    this.radioSelected = 'item_1';
    this.getSelecteditem();
  }

  ngOnInit() {
    this.orders = new ProductOrders();
    this.loadCart();
    this.loadTotal();

    this.itemsList.forEach((item) => {
      this.onItemChange(item);
    });
    this.priceDelivery = 1.99;
  }

  private calculateTotal(products: ProductOrder[]): number {
    let sum = 0;
    products.forEach((value) => {
      sum += value.product.price * value.quantity;
    });
    return sum + this.priceDelivery;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  finishOrder() {
    // this.orderFinished = true;
    // this.orderService.Total = this.total;
    // this.onOrderFinished.emit(this.orderFinished);
    this.router.navigate(['/order']);
  }

  loadTotal() {
    this.sub = this.orderService.OrdersChanged.subscribe(() => {
      this.total = this.calculateTotal(this.orders.productOrders);
    });
  }

  loadCart() {
    this.sub = this.orderService.ProductOrderChanged.subscribe(() => {
      let productOrder = this.orderService.SelectedProductOrder;
      if (productOrder) {
        this.orders.productOrders.push(
          new ProductOrder(productOrder.product, productOrder.quantity)
        );
      }
      this.orderService.ProductOrders = this.orders;
      this.orders = this.orderService.ProductOrders;
      this.total = this.calculateTotal(this.orders.productOrders);
    });
  }

  reset() {
    this.orderFinished = false;
    this.orders = new ProductOrders();
    this.orders.productOrders = [];
    this.loadTotal();
    this.total = 0;
  }
  getSelecteditem() {
    this.radioSel = ITEMS.find((Item) => Item.value === this.radioSelected);
    this.radioSelectedString = JSON.stringify(this.radioSel);
  }

  onItemChange(item: any) {
    this.getSelecteditem();
    this.priceDelivery = item.price;
  }
  commentPage() {
    this.router.navigate(['comment']);
  }

payment()
{
  this.router.navigate(['/payment']);
}

}