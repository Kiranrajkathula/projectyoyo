import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchExperience: string;
  homePanelData = [];
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.searchExperience = '';
    this.homePanelData = [
      {
        title: 'hello card',
        imgSrc: 'https://via.placeholder.com/350x150',
        desc:
          'This card has supporting text below as a natural lead-in to additional content.',
        lastUpdated: 3
      },
      {
        title: 'hello card',
        imgSrc: 'https://via.placeholder.com/350x150',
        desc:
          'This card has supporting text below as a natural lead-in to additional content.',
        lastUpdated: 3
      },
      {
        title: 'hello card',
        imgSrc: 'https://via.placeholder.com/350x150',
        desc:
          'This card has supporting text below as a natural lead-in to additional content.',
        lastUpdated: 3
      },
      {
        title: 'hello card',
        imgSrc: 'https://via.placeholder.com/350x150',
        desc:
          'This card has supporting text below as a natural lead-in to additional content.',
        lastUpdated: 3
      },
      {
        title: 'hello card',
        imgSrc: 'https://via.placeholder.com/350x150',
        desc:
          'This card has supporting text below as a natural lead-in to additional content.',
        lastUpdated: 3
      }
    ];
  }

  onSearchEnter(value: string) {
    this.searchExperience = value;
  }

  publishYourStory() {
    this.router.navigate(['/share']);
  }
}
