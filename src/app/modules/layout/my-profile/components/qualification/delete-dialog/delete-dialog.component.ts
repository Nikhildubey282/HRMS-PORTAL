import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private snackbar_service:SnackBarService

  ) { }

  ngOnInit(): void {
  }
  crossClick() {
    this.dialogRef.close();
  }

  confirm(){
    this.dialogRef.close(true);
    this.snackbar_service.showSuccess('Data Deleted Sucessfully','');
  }

}
