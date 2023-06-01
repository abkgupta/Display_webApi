import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Employee } from './emply';

@Injectable({
  providedIn: 'root'
})
export class EmplyeeService {
 private url:string = "/assets/data/employees.json"
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)
  }
}
