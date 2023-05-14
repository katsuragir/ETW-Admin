import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListsComponent } from './lists/lists.component';
import { UserComponent } from './user.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { CustomerRoutingModule } from '../customer/customer-routing.module';


@NgModule({
  declarations: [
    ListsComponent,
    UserComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CustomerRoutingModule,
    DropdownMenusModule,
    WidgetsModule,
  ]
})
export class UserModule { }
