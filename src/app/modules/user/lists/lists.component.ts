import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
]

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  column: any[] =  [
    {
      columnDef: 'user',
      header: this.translate.instant('data.USER.TABLE.USER'),
      isSortTable: true
    },
    {
      columnDef: 'company',
      header: this.translate.instant('data.USER.TABLE.COMPANY'),
      isSortTable: true
    },
    {
      columnDef: 'email',
      header: this.translate.instant('data.USER.TABLE.EMAIL'),
      isSortTable: false
    },
  ];
  dataSource: any[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.dataSource = DATA_USER;
  }

}
