import { Component,AfterViewInit, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ABS_DSRDETAIL, ABS_DSREDIT, ABS_PROJECTDETAIL } from 'src/app/constant/absolute-route';
import { TableColumn } from 'src/app/constant/routes';
import { SnackBerService } from 'src/app/services/snack-ber.service';
import { DeleteDialogComponent } from '../layout/my-profile/components/qualification/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from '../layout/my-profile/components/qualification/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-commontable',
  templateUrl: './commontable.component.html',
  styleUrls: ['./commontable.component.scss']
})
export class CommontableComponent implements OnInit,AfterViewInit {
  todayDate:any='';
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
  @Output() undo_leave:EventEmitter<any>=new EventEmitter();

  public displayedColumns!: string[];
  constructor(
    private _route:Router,
    public sanitizer:DomSanitizer,
    public dialog: MatDialog,
    private common :SnackBerService

  ) { }

  ngOnInit(): void {
    this.columns.forEach((item: any) => {
      this.matHeaderRow.push(item.heading)
    });
    this.columns.map((tableColumn: TableColumn) => tableColumn.heading);
    this.todayDate=this.common.todayDate();
    console.log(this.dataSource,'nikky',this.todayDate);
  }
  compareDate(date:any){
    let date1=date.split('-').map(x=>+x);
    let date2=this.todayDate.split('-').map(x=>+x);
    // console.log(date1[0],date2[0] ,'1', date1[1],date2[1] ,'2', date1[2],date2[2]);
    if(date1[0]>date2[0] && date1[1]>=date2[1] && date1[2]>=date2[2]){
      return true;
    }
    return false
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
