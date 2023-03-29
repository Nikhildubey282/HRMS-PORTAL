import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-documents',
  templateUrl: './common-documents.component.html',
  styleUrls: ['./common-documents.component.scss']
})
export class CommonDocumentsComponent implements OnInit {
  tags1=['Roadmap','Project plan','User stories','Designs'];
  tags2=['Scope of Work','WireFrame','Other','Project App Links']

  constructor() { }

  ngOnInit(): void {
  }

}
