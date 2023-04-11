import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { slideAnimation } from 'src/animation';
import { FormService } from 'src/app/services/form.service';
import { QUALIFICATION_MESSAGE } from 'src/app/constant/messages';
import { MatTableDataSource } from '@angular/material/table';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { SnackBarService } from 'src/app/services/snack-bar.service';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
  animations: [slideAnimation]
})
export class QualificationComponent implements OnInit {
  errorMsg = QUALIFICATION_MESSAGE;
  labelEducation = 'Education Level';
  labelLanguage = 'language'
  levelData = ['1', '2'];
  languageDropdown = ['English', 'Hindi']
  minDate: Date;
  maxDate: Date;
  qualificationForm!: FormGroup;
  @ViewChild(FormGroupDirective) fromGroupDirective:FormGroupDirective;

  dataSource = new MatTableDataSource<any>();

  heading = [
    { heading: 'Action', key: 'btn', type: 'edit-button' },
    { heading: 'School/University', key: 'university', type: 'text' },
    { heading: 'Time period ', key: 'startdate', type: 'text' },
    { heading: 'Education Level', key: 'educationLevel', type: 'text' },
  ]
  Table_DATA: any[] = [
    {id:Math.random(),btn: '', university: 'st calres', startdate: '4 years', educationLevel: '2' },
 
  ];

  constructor(
    private _fb: FormBuilder,
    private formservice: FormService,
    public dialog: MatDialog,
    private snackbar_service:SnackBarService
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 60, 0, 1);
    this.maxDate = new Date(currentYear - 20, 11, 31);
  }



  ngOnInit(): void {
    this.createForm()
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

  }

  createForm() {
    this.qualificationForm = this._fb.group({
      id:Math.random(),
      university: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      educationLevel: ['', [Validators.required]],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      language: ['', [Validators.required]],
      professionalCourse: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]],
      descripition: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)]]
    })
  }


  get formCtrl() { return this.qualificationForm.controls; }


  submitHandler() {
    console.log(this.qualificationForm.valid, 'sdfhhsdfjhsdjhjhsdjhjsdjjsd')
    if(this.qualificationForm.valid){
    this.Table_DATA.push(this.qualificationForm.value);
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);
    this.fromGroupDirective.resetForm();

    this.snackbar_service.showSuccess('Data Added Sucessfully','')
    }
    else{
      this.snackbar_service.showError('Enter a required field','')
      this.qualificationForm.markAllAsTouched();

    }
  }



  delete_data(e:any) {
    console.log(e,'deletedata');
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if(res===true){
        this.Table_DATA=this.Table_DATA.filter(value=>
          value.id!=e.id
        );
      }
    this.dataSource = new MatTableDataSource<any>(this.Table_DATA);

    });
  }


  edit_data(e: any) {
    console.log(e, 'shiva pagal')
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = e;
    const dialogRef = this.dialog.open(EditDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      if(result){
        this.Table_DATA=this.Table_DATA.filter((value)=>{
          console.log(value,'niklh dubey');
          if(value.id=e.id){
            value.university=result.university;
            value.educationLevel=result.educationLevel;
          }
          // dialogRef.unsubscribe();
        });
      }

    });
  }

}


