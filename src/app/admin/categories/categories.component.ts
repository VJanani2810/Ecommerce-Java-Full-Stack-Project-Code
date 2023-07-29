import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product, Category, User, Tag ,Comment} from 'src/app/modal/modal.service';
import { CategoryService } from 'src/app/service/category.service';
import { CommentService } from 'src/app/service/comment.service';
import { ProductService } from 'src/app/service/product.service';
import { TagService } from 'src/app/service/tag.service';
import { UserService } from 'src/app/service/user.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddTagToProductComponent } from '../add-tag-to-product/add-tag-to-product.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  idCategory!: number; // jc chane a lot
  products: Product[] | undefined;
  category: Category = {} as Category;
  user: User = {} as User;
  panelOpenState: boolean | undefined;
  tags: Tag[] | undefined;
  comments: Comment[] | undefined ;

  constructor(private productService: ProductService, private categoryService: CategoryService,
    private route: ActivatedRoute, private dialog: MatDialog, private userService: UserService,
    private tagService: TagService, private commentService: CommentService) {
    this.route.params.subscribe(
      params => {
        this.idCategory = this.route.snapshot.params['idCategory']; // jc change
        this.categoryService.findCategoryById(this.idCategory).subscribe(category => {
          this.category = category;
          this.productService.findProductsForCategory(this.idCategory).subscribe(products => {
            this.products = products;
          });
        })
        this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
          this.user = user;
        })
        this.commentService.findAllComments().subscribe(comments => {
          this.comments = comments;
        })
      }
    )
  }

  ngOnInit(): void {
  }

  addTag(idProduct: any) { 
    if (confirm("Are you sure")) {
    this.dialog.open(AddTagToProductComponent, {
      data: { idProduct }
    })
  }
}
  showTags(idProduct: number) {
    this.tagService.findTagsForProduct(idProduct).subscribe(tags => {
      this.tags = tags;
    })
  }
  deleteCategory(idCategory: number, idUser: any) {
    if (confirm("Are you sure")) {
      this.categoryService.deleteCategory(idCategory).subscribe(() => {
        window.location.replace(`/profile/${idUser}`)
      })
    }
  }
  editCategory(idCategory: any) {
    this.dialog.open(AddCategoryComponent, {
      data: { idCategory }
    })
  }
  deleteProduct(idProduct: number, idUser: any) {
    if (confirm("Are you sure")) {
      this.productService.deleteProduct(idProduct).subscribe(() => {
        window.location.replace(`/profile/${idUser}`)
      })
    }
  }
  editProduct(idProduct: any) {
    this.dialog.open(AddProductComponent, {
      data: { idProduct }
    })
  }
  deleteComment(id: number) {
    this.commentService.deleteComment(id).subscribe(() => {
      window.location.reload();
    })
  }
}
