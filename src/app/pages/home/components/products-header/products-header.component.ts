import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sortByMenu: any;
  sort = 'desc';
  menu: any;
  itemsShowCount = 12;


  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated (newSort: string): void {
    this.sort = newSort;
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdated (colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
