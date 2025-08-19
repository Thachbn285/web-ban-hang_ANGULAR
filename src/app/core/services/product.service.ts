import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}
  private readonly myApiUrl = environment.apiUrl;
  getItem() {
    return this.http.get(this.myApiUrl);
  }
}
