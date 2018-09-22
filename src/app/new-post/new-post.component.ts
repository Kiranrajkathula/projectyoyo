// import { ImageResize } from 'node_modules/quill-image-resize-module/image-resize.min.js';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as QuillNamespace from 'quill';
const Quill: any = QuillNamespace;
import ImageResize from 'quill-image-resize-module';
Quill.register('modules/imageResize', ImageResize);

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  dataModel: any = {};
  authorName: string;
  experienceTitle: string;
  categoryName: string;
  subcategoryName: string;
  showPostLink: boolean;
  generatedPostUrl: string;
  modules = {};
  constructor() {
    this.authorName = 'kiranraj';
    this.showPostLink = false;
    this.modules = {
      toolbar: {
        container: [
          [{ font: [] }],
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline'],
          [{ header: 1 }, { header: 2 }],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ align: [] }],
          ['link', 'image']
        ]
      },
      imageResize: {}
    };
  }

  ngOnInit() {}

  generatePostUrl() {
    if (!this.experienceTitle) {
      alert('Please enter short title for your experience');
      return;
    }

    if (!this.categoryName) {
      alert('Please enter category name');
      return;
    }

    if (!this.subcategoryName) {
      alert('Please enter sub category name');
      return;
    }

    this.showPostLink = true;
    this.generatedPostUrl =
      'http://myexperience.in/' + this.categoryName.replace(/\s+/g, '-').toLowerCase() +  '/' +
       this.subcategoryName.replace(/\s+/g, '-').toLowerCase() + '/' +
       this.experienceTitle.replace(/\s+/g, '-').toLowerCase() + '-by-' +
       this.authorName.replace(/\s+/g, '-').toLowerCase();
  }
  setFocus($event) {
    $event.focus();
  }
  getUpdatedContent($event: any) {
    console.log($event);
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dataModel));
  }
}
