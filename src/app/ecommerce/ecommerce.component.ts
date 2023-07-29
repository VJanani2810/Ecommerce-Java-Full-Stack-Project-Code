import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Category, Product, User } from '../modal/modal.service';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css'],
})
export class EcommerceComponent implements OnInit {
  orderFinished = false;
  name: any;
  showSearch = false;
  products!: Product[];
  product: Product = {} as Product;
  showBtn = -1;
  showMyContainerInfo = false;
  user :User ={} as User;
  categories: Category[] | undefined;

  @ViewChild('productsC')
  productsC!: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC!: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC!: OrdersComponent;

  constructor(private productService: ProductService, private router: Router
    ,private categoryService:CategoryService,private userService:UserService) { 
      this.userService.findByUsername(userService.getUsername()).subscribe((user:User) =>{
        this.user= user;

      });
    
  }

  ngOnInit(): void {   
     this.categoryService.findAllCategories().subscribe((categories: Category[]) => {
    this.categories = categories;
});
}

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }
  login() {
    this.router.navigate(['/login']);
    //this.dialog.open(LoginComponent);
}

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }
  search() {
    this.productService.findByName(this.name).subscribe((products) => {
      this.products = products;
      this.showSearch = true;
    });
  }

  showUndoBtn(index: number) {
    this.showBtn = index;
  }
  productInfo(id: number) {
    this.productService.findProductById(id).subscribe((product) => {
      this.product = product;
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }
  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }
}