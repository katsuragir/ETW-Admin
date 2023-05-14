import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { ListsComponent } from './lists/lists.component';
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';


@NgModule({
  declarations: [
    CustomerComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DropdownMenusModule,
    WidgetsModule,
    SharedModule,
  ]
})
export class CustomerModule { }
