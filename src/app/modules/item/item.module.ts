import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { ListsComponent } from './lists/lists.component';
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';


@NgModule({
  declarations: [
    ItemComponent,
    ListsComponent
  ],
  imports: [
    CommonModule,
    ItemRoutingModule,
    DropdownMenusModule,
    WidgetsModule,
    SharedModule,
  ]
})
export class ItemModule { }
