import { Component, OnInit } from '@angular/core';
import { PagesService } from '@app/_metronic/shared/services/pages.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(
    private pagesService: PagesService
  ) {}

  ngOnInit(): void {

  }
}
