import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tables-widget9',
  templateUrl: './tables-widget9.component.html',
})
export class TablesWidget9Component {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() useSubTitle: boolean = false;
  @Input() useButtonAdd: boolean = false;
  @Input() useFilter: boolean = false;
  constructor(
    private translate: TranslateService
  ) {}

}
