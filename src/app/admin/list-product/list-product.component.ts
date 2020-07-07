import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/shared/admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private service: AdminService) { }

  // dataSource: MatTableDataSource<any>;
  displayedColumns: string[]= ['code', 'name', 'brand', 'description', 'price', 'quantity','image', 'actions'];
  
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  // @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource(array);
    this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
  }

}

export interface PeriodicElement {
  code        : string;
  name        : string;
  brand       : string;
  description : string;
  price       : string;
  quantity    : number;
  image       : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {code: '01', name: 'AL', brand: 'Nike1', description: 'Hasdafwf', price: '6.5', quantity: 3, image: 'asdasd'},
  {code: '02', name: 'BR', brand: 'Nike2', description: 'Hdfhdtd', price: '6.3', quantity: 2, image: 'asdasd'},
  {code: '03', name: 'CH', brand: 'Nike3', description: 'Hadfqqwr', price: '6.8', quantity: 1, image: 'asdasd'},
  {code: '04', name: 'DA', brand: 'Nike4', description: 'Has5iggd', price: '6.0', quantity: 3, image: 'asdasd'},
  {code: '05', name: 'DA', brand: 'Nike5', description: 'asdqwr', price: '6.0', quantity: 0, image: 'asdasd'},
  {code: '06', name: 'DB', brand: 'Nike6', description: 'qasdq2', price: '6.0', quantity: 5, image: 'asdasd'},
  {code: '07', name: 'DR', brand: 'Nike7', description: 'qwe', price: '6.0', quantity: 9, image: 'asdasd'},
  {code: '08', name: 'DH', brand: 'Nike8', description: 'Has5weriggd', price: '6.0', quantity: 7, image: 'asdasd'},
  {code: '09', name: 'DJ', brand: 'Nike9', description: 'sdg', price: '6.0', quantity: 10, image: 'asdasd'},
  {code: '10', name: 'AF', brand: 'Nike10', description: 'Hassdg5iggd', price: '6.0', quantity: 6, image: 'asdasd'},
  {code: '11', name: 'CB', brand: 'Nike11', description: 'Hasas5iggd', price: '6.0', quantity: 3, image: 'asdasd'},
  {code: '12', name: 'TD', brand: 'Nike12', description: 'Has5234iggd', price: '6.0', quantity: 8, image: 'asdasd'},
];
