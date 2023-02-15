import { Component, OnInit } from '@angular/core';
import { DIRECTORY_EMPLOYEE_DATA } from 'src/app/constant/directory_constant';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  DATA=DIRECTORY_EMPLOYEE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
