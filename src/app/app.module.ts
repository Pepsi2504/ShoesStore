import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './admin/admin.component';
import { AdminService } from './shared/admin.service'
import { ListProductComponent } from './admin/list-product/list-product.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
// import { MatTableDataSource } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';

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
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    // MatTableDataSource,
    MatPaginatorModule,
    // MatSortModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
