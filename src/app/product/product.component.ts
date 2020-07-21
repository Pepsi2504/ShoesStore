import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service : ProductService ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  selectedProduct(code : number){
    this.service.getProduct(code);
  }

}
