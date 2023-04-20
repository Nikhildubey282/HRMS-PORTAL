import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBerService {

  constructor() { }

  todayDate() {
    var today:any = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }
}
