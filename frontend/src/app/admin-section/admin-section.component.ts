import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.component.html',
  styleUrls: ['./admin-section.component.css']
})
export class AdminSectionComponent implements OnInit {

  users: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers()
      .subscribe(data => this.users = data);
  }

}
