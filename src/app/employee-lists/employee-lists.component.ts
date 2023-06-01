import { Component, OnInit } from '@angular/core';
import { EmplyeeService } from '../emplyee.service';

@Component({
  selector: 'app-employee-lists',
  templateUrl: './employee-lists.component.html',
  styleUrls: ['./employee-lists.component.css']
})
export class EmployeeListsComponent implements OnInit{
  employees!: any[];
  constructor(private emplyservice: EmplyeeService) {}

  ngOnInit() {
    this.emplyservice.getEmployees()
    .subscribe(data => this.employees = data)
  }

}
