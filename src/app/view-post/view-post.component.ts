import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  getLocPath: Location;
  catName: string;
  subcatName: string;
  postTitle: string;
  getNamesFromUrl: string[];
  constructor(
    location: Location
  ) {
    this.getLocPath = location;
    this.getNamesFromUrl = this.getLocPath.path().split('/');
   }

  ngOnInit() {
    console.log(this.getLocPath.path());
    console.log(this.getNamesFromUrl);
    this.catName = this.getNamesFromUrl[1];
    this.subcatName = this.getNamesFromUrl[2];
    this.postTitle = this.getNamesFromUrl[3];

    console.log('category name: ' + this.catName);
    console.log('sub category name: ' + this.subcatName);
    console.log('post title: ' + this.postTitle);
  }

}
