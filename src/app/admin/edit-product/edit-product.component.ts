import { Component, OnInit } from '@angular/core';

import { AdminService } from '../../shared/admin.service'

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(public service: AdminService) { }

  ngOnInit(): void {
  }

  onReset(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
