import {NgModule} from '@angular/core';
import {KeeniconComponent} from './keenicon/keenicon.component';
import {CommonModule} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    KeeniconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    KeeniconComponent
  ]
})
export class SharedModule {
}
