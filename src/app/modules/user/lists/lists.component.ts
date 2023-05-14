import { Component, OnInit } from '@angular/core';

const DATA_USER: any = [
  {
    id: 1,
    Name: "Katsuragi R",
    image: "./assets/media/avatars/300-5.jpg"
  }
]

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

}
