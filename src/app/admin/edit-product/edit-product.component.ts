import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service'
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor( public service : ProductService, private toastr : ToastrService ) { }
  
  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form!=null) 
    form.resetForm();
    this.service.formData = {
      Code : null,
      Name : '',
      Brand : '',
      Description : '',
      Price : null,
      Image : '',
      Quantity : 0,
    }
  }

  onSubmit(form: NgForm){
    if(form.value.Code == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postProduct(form.value).subscribe(res => {
      this.toastr.success('Infomation of product is saved!', 'SUCCESS');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm){
    this.service.putProduct(form.value).subscribe(res => {
      this.toastr.info('Infomation of product is Update!', 'SUCCESS');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
