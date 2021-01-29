import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})

export class EntranceComponent implements OnInit {

  showLoginComponent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEntrance(): void {
    this.showLoginComponent = true;
  }

}
