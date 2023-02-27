import { Component,AfterViewInit, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableColumn } from 'src/app/constant/routes';



@Component({
  selector: 'app-commontable',
  templateUrl: './commontable.component.html',
  styleUrls: ['./commontable.component.scss']
})
export class CommontableComponent implements OnInit,AfterViewInit {
  matHeaderRow: any = [];
  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @Input() columns!: any;
  @Input() dataSource!: any;
  @Input() Table_DATA!: any;
  @Input() isPageable = true;
  @Input() paginationSizes: number[] = [2, 10, 15];
  @Input() set pazeSize(size: any) {
    if(size)
      this.changePageSize(size);
  }
  @Output() userDetail: EventEmitter<any> = new EventEmitter();
  @Output() onIconClick: EventEmitter<any> = new EventEmitter();
  public displayedColumns!: string[];
  constructor() { }

  ngOnInit(): void {
    this.columns.forEach((item: any) => {
      this.matHeaderRow.push(item.heading)
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
    console.log(this.dataSource);

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.matPaginator;
  }

  handleClick(data: any, type: any) {
    const iconData = {
      data: data,
      iconType:type
    }
    console.log(type, 'ji', data);
    this.onIconClick.emit(iconData);
  }
  changePageSize(size: number) {
    this.matPaginator._changePageSize(size)
  }


}
