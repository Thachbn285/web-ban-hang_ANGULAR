import { Component } from '@angular/core';
import { environment } from '../../../../../environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get(`${this.apiUrl}/courses/all`);
  }
}
