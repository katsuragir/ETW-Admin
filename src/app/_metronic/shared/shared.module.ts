import {NgModule} from '@angular/core';
import {KeeniconComponent} from './keenicon/keenicon.component';
import {CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgbdSortableHeader } from './direction/sort-table';

@NgModule({
  declarations: [
    KeeniconComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbdSortableHeader
  ],
  exports: [
    KeeniconComponent,
    NgbdSortableHeader
  ]
})
export class SharedModule {
}
