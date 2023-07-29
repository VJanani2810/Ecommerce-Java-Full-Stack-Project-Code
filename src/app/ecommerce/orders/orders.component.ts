
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ProductOrders, User } from 'src/app/modal/modal.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';
import { UpdateProfileComponent } from 'src/app/update-profile/update-profile.component';
declare var Razorpay: any;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ProductOrders;
  total: number | undefined;
  paid = false;
  sub: Subscription | undefined;
  user: User = new User();
  hideUpdateMessage = true;
  id: number | undefined;
  name: string | undefined
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  nameOnCard: string | undefined;
  cardNumber: string | undefined;
  cvv: number | undefined;
  address: string | undefined;
  errorMessage: string | undefined;
  hideDiv = true;
  newDate: Date | undefined;
  hideItem: boolean | undefined;

  constructor(private orderService: OrderService, private userService: UserService, private dialog: MatDialog) {
    this.orders = this.orderService.ProductOrders;
  }

  ngOnInit() {
    this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
      this.user = user;
      if (this.nameOnCard != null || this.cardNumber || this.cvv || this.address) {
        this.nameOnCard = this.user.nameOnCard;
        this.cardNumber = this.user.cardNumber;
        this.cvv = this.user.cvv;
        this.address = this.user.address;
      }
    })
    this.sub = this.orderService.OrdersChanged.subscribe(() => {
      this.orders = this.orderService.ProductOrders;
    });
    this.loadTotal();
    this.newDate = new Date();
  }

  pay() {
    this.paid = true;
    this.hideDiv = false;
    this.orderService.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.orderService.TotalChanged.subscribe(() => {
      this.total = this.orderService.Total;
    });
  }

  goToHome() {
    window.location.reload();
  }

  goToUpdateProfile(idUser: any) {
    this.hideUpdateMessage = false;
    this.dialog.open(UpdateProfileComponent, {
      data: { idUser }
    })
  }

  
}