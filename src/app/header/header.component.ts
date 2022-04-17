import { Component, OnInit } from '@angular/core';
import { Category } from '../typedefs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Category = Category;

  constructor() { }

  ngOnInit(): void {
  }

}
