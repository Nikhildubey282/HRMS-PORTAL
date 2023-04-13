import { Component,EventEmitter, OnInit,Input, Output } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    @Input() myControlName!:any;
    @Input() label!: any;
    @Input() Data!:any;
    @Input() errorType:any;
    @Input() placeholder:any;
    @Output() directory:EventEmitter<any>=new EventEmitter();

    // @Input() formfieldCSS;
    // @Input() labelStyle;
    selected = 'test';
    myControl = new FormControl('');
    filteredOptions!: Observable<string[]>;
    // errorMessage = validationMessage

  constructor() { }

  ngOnInit(): void {
    this.myControlName?.patchValue(this.Data[0])
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map((value) => {
          let res = this._filter(value || '');
          if (!res.length) {
            res = ['no results Found'];
          }
        //   console.log(res);
          return res;
        })
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.Data.filter((option:any) => {
      const res = option?.toLowerCase().includes(filterValue);

      return res;
    });
  }

}
