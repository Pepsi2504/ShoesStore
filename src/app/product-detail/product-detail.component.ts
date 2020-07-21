import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service'


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor( public service : ProductService) {  }

  ngOnInit() {
    this.service.getProduct(2);
  }

}


