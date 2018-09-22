import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  postStatus: string;
  constructor() { }

  ngOnInit() {
    this.activateTab('published');
  }

  activateTab(param) {
    this.postStatus = param;
    console.log(param);
  }
}
