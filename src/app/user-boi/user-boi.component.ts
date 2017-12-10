import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-boi',
  templateUrl: './user-boi.component.html',
  styleUrls: ['./user-boi.component.css'],
})
export class UserBoiComponent implements OnInit {
  @Input() userinfo;
  constructor() { }

  ngOnInit() {
  }

}
