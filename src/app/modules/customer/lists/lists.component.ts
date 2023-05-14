import { Component, OnInit } from '@angular/core';
import { PagesService } from '@app/_metronic/shared/services/pages.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  pageIndex: number;
  pageSize: number;

  constructor(
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {
    const page = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize
    }
    this.pagesService.getCustomerList(page).subscribe((result: any) => {
      console.log(result);
    });

  }
}
