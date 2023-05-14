import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { EtwComponent } from './etw/etw.component';
import { ClaimComponent } from './claim/claim.component';
import { SalesComponent } from './sales/sales.component';


@NgModule({
  declarations: [
    EtwComponent,
    ClaimComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
