import { Component,AfterViewInit, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ABS_DSRDETAIL, ABS_DSREDIT, ABS_PROJECTDETAIL } from 'src/app/constant/absolute-route';
import { TableColumn } from 'src/app/constant/routes';
import { DeleteDialogComponent } from '../layout/my-profile/components/qualification/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../layout/my-profile/components/qualification/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-commontable',
  templateUrl: './commontable.component.html',
  styleUrls: ['./commontable.component.scss']
})
export class CommontableComponent implements OnInit,AfterViewInit {
  dsrdetail=ABS_DSRDETAIL;
  DSREDIT=ABS_DSREDIT;
  PROJECTDETAIL=ABS_PROJECTDETAIL;
  matHeaderRow: any = [];
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
  // @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }
  @Input() searchBar=false;
  @Input() columns!: any;
  @Input() dataSource!: any;
  @Input() Table_DATA!: any;
  @Input() isPageable = true;
  @Input() paginationSizes: number[] = [5, 10, 15];
  // @Input() set pazeSize(size: any) {
  //   if(size)
  //     this.changePageSize(size);
  // }
  @Output() userDetail: EventEmitter<any> = new EventEmitter();
  @Output() onIconClick: EventEmitter<any> = new EventEmitter();
  @Output() edit_button:EventEmitter<any>=new EventEmitter();
  @Output() delete_button:EventEmitter<any>=new EventEmitter();

  public displayedColumns!: string[];
  constructor(
    private _route:Router,
    public sanitizer:DomSanitizer,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.columns.forEach((item: any) => {
      this.matHeaderRow.push(item.heading)
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
    console.log(this.dataSource,'nikky');
  }

  ngAfterViewInit(): void {
    this.dataSource.sort=this.matSort;
    // this.dataSource.paginator = this.matPaginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter,'nikhildubey')
  }
  // changePageSize(size: number) {
  //   this.matPaginator._changePageSize(size)
  // }





}
