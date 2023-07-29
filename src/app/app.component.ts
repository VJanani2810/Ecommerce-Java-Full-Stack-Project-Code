import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Category, Product, User } from './modal/modal.service';
import { UserService } from './service/user.service';
import { CategoryService } from './service/category.service';
import { Router } from '@angular/router';
import { ProductService } from './service/product.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    orderFinished!: boolean;
    name: any;
    user: User = {} as User;
    categories: Category[] | undefined;
    title: any;
    products!: Product[];
    showSearch = false;
    
    product: Product = {} as Product;
    showBtn = -1;
    showMyContainerInfo = false;

    constructor(public dialog: MatDialog, private userService: UserService, 
        private categoryService: CategoryService, private router: Router
        ,private productService: ProductService) {
        this.userService.findByUsername(userService.getUsername()).subscribe((user: User) => {
            this.user = user;
        })
    }

    ngOnInit(): void {
        this.categoryService.findAllCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
        });
    }

    login() {
        this.router.navigate(['/login']);
        //this.dialog.open(LoginComponent);
    }

    finishOrder(orderFinished: any) {
        this.orderFinished = orderFinished;
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
