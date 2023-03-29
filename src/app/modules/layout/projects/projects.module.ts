import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ProjectListComponent } from './project-list/project-list.component';
import { CommontableModule } from '../../commontable/commontable.module';
import { ProjectAllComponent } from './project-all/project-all.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectAllComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatButtonToggleModule,
    MatIconModule,
    CommontableModule


  ]
})
export class ProjectsModule { }
