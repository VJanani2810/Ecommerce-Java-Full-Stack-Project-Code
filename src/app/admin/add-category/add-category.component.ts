import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/modal/modal.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: Category = {} as Category;
  progressBar = false;
  idCategory!:number ;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    if (this.idCategory != null) {
      this.categoryService.findCategoryById(this.idCategory).subscribe(category => {
        this.category = category;
      })
    }
  }
  addCategory() {
   // this.progressBar = true;
    if (this.idCategory != null) {
      this.categoryService.editCategory(this.category, this.idCategory).subscribe(category => {
        this.category = category;
        alert(" Category Updated Successfully")
        window.location.reload();
      })
    } else {
      // jc do goalmal it only work for id 1
      this.categoryService.addCategoryToUser(this.category,1).subscribe(category => {
        this.category = category;
        alert("New Category Added Successfully")
        window.location.reload();
      })
    }
  }

}
