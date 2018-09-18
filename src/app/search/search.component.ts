import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchExperience: string;
  constructor() {}

  ngOnInit() {}

  onSearchEnter(value: string) {
    this.searchExperience = value;
  }
}
