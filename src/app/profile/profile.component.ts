import { Component, Inject, OnInit } from '@angular/core';
import { Cart, Category, User } from '../modal/modal.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CategoryService } from '../service/category.service';
import { UserService } from '../service/user.service';
import { AddCategoryComponent } from '../admin/add-category/add-category.component';
import { AddProductComponent } from '../admin/add-product/add-product.component';
import { AddTagComponent } from '../admin/add-tag/add-tag.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// jc add so many Things
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  ngOnInit(): void {
  }
  user: User = {} as User;
  categories: Category[] | undefined;
  carts: Cart[] | undefined;
  cartLength = 0;

  constructor(private userService: UserService, private route: ActivatedRoute, private dialog: MatDialog,
    private categoryService: CategoryService, private cartService: CartService, private router: Router
    ) {
      
    this.route.params.subscribe(
      params => {
        this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
          this.user = user;
          this.cartService.findCartsForUser(this.user.id).subscribe(carts => {
            this.carts = carts;
            this.cartLength = this.carts.length;
            console.log(this.cartLength);
          });
          this.categoryService.findAllCategories().subscribe(categories => {
            this.categories = categories;
          })
        })
      }
    )
  }


  logout(id: any) {
    window.location.replace("/dashboard");
    this.userService.signOut();
  }
  addCategory(idUser: any) {
    //  this.dialog.open(AddCategoryComponent, {
    //    data: { idUser }
    // })
   // this.router.navigate(['sangle/product', id]);
    this.router.navigate(['/addCategory',idUser]);
  }

  addProduct(idCategory: any) {
    if(confirm('are you want to add '))
    {
     this.dialog.open(AddProductComponent, {
        data: { idCategory },

       // maxWidth:100
      })
    }
 
  }

  addTag() {
  //this.router.navigate(['/addTag'])
    //this.dialog.open(AddTagComponent);
  }
  updateProfile(idUser :any) {
    //this.dialog.open(UpdateProfileComponent);
    this.router.navigate(['/updateProfile'])
    
  }
  
  deleteCart(idPro: any, idUser: any) {
    if (confirm('Are you sure')) {
      this.cartService.removeFromCart(idPro, idUser).subscribe(() => {
        window.location.reload();
      })
    }
  }
  sangleProduct(name: any) {
    this.router.navigate(['/puy/product/', name]);
  }


}
