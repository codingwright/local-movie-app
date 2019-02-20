import { Component, OnInit } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  current: IShowDetails
  constructor() {
    this.current = {
      name: 'Brooklyn Nine Nine',
      description: 'Hilarious show I watch all the time',
      rate: 5,
      image: ''
    };
  }

  ngOnInit() {
  }

}
