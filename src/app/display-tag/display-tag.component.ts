import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../modal/modal.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-display-tag',
  templateUrl: './display-tag.component.html',
  styleUrls: ['./display-tag.component.css']
})
export class DisplayTagComponent implements OnInit{
  orderFinished = false;
  idCategory!: number ;
  products: Product[] = [];
  product: Product = {} as Product;
  showBtn = -1;
  showMyContainerInfo = false;

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router) {
    this.route.params.subscribe(
      params => {
        this.idCategory = this.route.snapshot.params['idCategory']; // jc change
        this.productService.findProductsForCategory(this.idCategory).subscribe(products => {
          this.products = products;
        }
        );
      }
    )
  }

  ngOnInit() {
  }

  showUndoBtn(index :any)  {
    this.showBtn = index;
  }
  productInfo(id: number) {
    this.productService.findProductById(id).subscribe(product => {
      this.product = product;
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }
  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }
}
