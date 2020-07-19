import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AdminComponent } from './admin/admin.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { ProductService } from './shared/product.service';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EditProductComponent,
    ListProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents:[EditProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
