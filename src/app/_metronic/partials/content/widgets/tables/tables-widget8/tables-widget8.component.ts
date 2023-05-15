import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgbdSortableHeader, SortEvent } from '@app/_metronic/shared/direction/sort-table';
import { PagesService } from '@app/_metronic/shared/services/pages.service';
import { Observable, Subject } from 'rxjs';

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

const DATA_USER: any = [
  {
    id: 1,
    name: "Katsuragi R",
    image: "./assets/media/avatars/300-5.jpg",
    role: "Administrator",
    company: "Mitra 10",
    email: "katsuragir@mitra10.com",
    menu: {
      customer: true,
      itemETW: true,
      claim: true,
      setup: {
        etw: true,
        promo: true
      },
      report: {
        etw: true,
        claim: true,
        sales: true
      },
      user: true
    }
  },
  {
    id: 2,
    name: "Tomoe Iris",
    image: "./assets/media/avatars/300-5.jpg",
    role: "Admin",
    company: "Mitra 10",
    email: "kagamirey@mitra10.com",
    menu: {
      customer: true,
      itemETW: true,
      claim: true,
      setup: {
        etw: false,
        promo: false
      },
      report: {
        etw: false,
        claim: false,
        sales: false
      },
      user: false
    }
  },
  {
    id: 3,
    name: "Kagami Rey",
    image: "./assets/media/avatars/300-14.jpg",
    role: "Admin",
    company: "Mitra 10",
    email: "tomoeiris@mitra10.com",
    menu: {
      customer: true,
      itemETW: true,
      claim: true,
      setup: {
        etw: true,
        promo: true
      },
      report: {
        etw: true,
        claim: true,
        sales: true
      },
      user: false
    }
  }
];

@Component({
  selector: 'app-tables-widget8',
  templateUrl: './tables-widget8.component.html',
})
export class TablesWidget8Component implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() useSubTitle: boolean = false;
  @Input() useButtonAdd: boolean = false;
  @Input() useFilter: boolean = true;
  @Input() columns: any[];
  dataSource: any[];
  page = 1;
	pageSize = 5;
	collectionSize: any;
  dataTable: any[];
  allData: any[];
  $allData: Subject<any[]> = new Subject<any[]>;
  $dataSource: Subject<any[]> = new Subject<any[]>;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  constructor(
    private translate: TranslateService,
    private pagesService: PagesService
  ) {

  }

  ngOnInit(): void {
    const page = {
      pageIndex: 1,
      pageSize: 10
    }
    this.pagesService.getCustomerList(page).subscribe((result: any) => {
      console.log(result);
      this.allData = result;
      this.collectionSize = result.leght;
      this.refreshData();
    });
  }

  onSort({ column, direction }: SortEvent) {
    console.log(this.headers)
    const data = this.dataSource;
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting
		if (direction === '' || column === '') {
			this.dataSource = this.dataTable;
		} else {
			this.dataSource = [...data].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}

  canEdit(event: any) {
    if (event.role === 'Administrator') {
      return false;
    } else {
      return true;
    }
  }

  refreshData() {
    console.log(this.allData);
		this.dataSource = this.allData.map((user:any, i:any) => ({ id: i + 1, ...user })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
    this.dataTable = this.dataSource;
    this.$dataSource.next(this.dataSource);
    console.log(this.dataSource);
	}

}
