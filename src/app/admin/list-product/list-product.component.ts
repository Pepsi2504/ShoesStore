import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';
import { Product } from 'src/app/shared/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor( public service : ProductService, private toastr: ToastrService) { }

  ngOnInit(){
    this.service.refreshList();
  }

  editProduct(pro : Product){
    this.service.formData = Object.assign({},pro);
  }

  deleteProduct(id : number, name: string){
    if(confirm('Are you sure to delete this Product: '+name+'?'))
    this.service.deleteProduct(id).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Infomation of product is Deleted!', 'SUCCESS');
    });
  }

}


