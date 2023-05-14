import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimRoutingModule } from './claim-routing.module';
import { ListsComponent } from './lists/lists.component';
import { ClaimComponent } from './claim.component';
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';


@NgModule({
  declarations: [
    ListsComponent,
    ClaimComponent
  ],
  imports: [
    CommonModule,
    ClaimRoutingModule,
    DropdownMenusModule,
    WidgetsModule,
    SharedModule,
  ]
})
export class ClaimModule { }
