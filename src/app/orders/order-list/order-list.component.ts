import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { PageEvent } from '@angular/material';


const ELEMENT_DATA =
[
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 10.99,
    description: 'fake data 1',
    isChecked: false
  },

  {
    orderDate: new Date(),
    orderNumber: 200,
    total: 20.99,
    description: 'fake data 2',
    isChecked: false
  },

  {
    orderDate: new Date(),
    orderNumber: 300,
    total: 30.99,
    description: 'fake data 3',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 10.99,
    description: 'fake data 1',
    isChecked: false
  },

  {
    orderDate: new Date(),
    orderNumber: 200,
    total: 20.99,
    description: 'fake data 2',
    isChecked: false
  },

  {
    orderDate: new Date(),
    orderNumber: 300,
    total: 30.99,
    description: 'fake data 3',
    isChecked: false
  },
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 10.99,
    description: 'fake data 1',
    isChecked: false
  },

  {
    orderDate: new Date(),
    orderNumber: 200,
    total: 20.99,
    description: 'fake data 2',
    isChecked: false
  },

  {
    orderDate: new Date(),
    orderNumber: 300,
    total: 30.99,
    description: 'fake data 3',
    isChecked: false
  },
]

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource: MatTableDataSource<object>; // new MatTableDataSource(ELEMENT_DATA);
  pageEvent: PageEvent;

  length = 100;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [1, 2, 5, 10];

  @ViewChild(MatSort, {static: true}) sort: MatSort; 


  constructor() { }

  ngOnInit() 
  {
    this.loadData(0, this.pageSize);
    this.dataSource.sort = this.sort;
  }

  loadData(pageIndex, pageSize)
  {
    this.dataSource = new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
  }

  onPageChange(e)
  {
    // const previousPangeIndex = e.previousPangeIndex;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    // const length = e.length;

    this.loadData(this.pageIndex, this.pageSize);
  }

  selectAll()
  {
    ELEMENT_DATA.forEach(c => c.isChecked = !c.isChecked);
  }

}
