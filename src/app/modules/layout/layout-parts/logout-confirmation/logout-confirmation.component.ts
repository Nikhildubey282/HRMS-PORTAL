import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-logout-confirmation',
  templateUrl: './logout-confirmation.component.html',
  styleUrls: ['./logout-confirmation.component.scss']
})
export class LogoutConfirmationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LogoutConfirmationComponent>,
    private snackbar_service:SnackBarService,
    private _route:Router
  ) { }

  ngOnInit(): void {
  }
  crossClick() {
    this.dialogRef.close('match');
  }

  confirm(){
    this._route.navigate(['./login']);
    this.dialogRef.close('match');
    this.snackbar_service.showSuccess('Logout Sucessfully !!','')

  }

}
