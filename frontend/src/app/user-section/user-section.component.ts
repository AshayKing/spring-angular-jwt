import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.css']
})
export class UserSectionComponent implements OnInit {

  cities: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCities()
      .subscribe(data => this.cities = data);
  }

}
