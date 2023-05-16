import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListsComponent } from './lists/lists.component';
import { UserComponent } from './user.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DropdownMenusModule, WidgetsModule } from 'src/app/_metronic/partials';
import { CustomerRoutingModule } from '../customer/customer-routing.module';
import { TranslationModule } from '../i18n';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from '@app/_metronic/shared/shared.module';


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
    TranslationModule,
    InlineSVGModule,
    NgApexchartsModule,
    NgbDropdownModule,
    SharedModule,
  ]
})
export class UserModule { }
