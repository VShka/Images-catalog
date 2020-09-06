import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_KEY, API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public tag: string;

  constructor(
    private http: HttpClient
    ) { }


  getTag(value: string): void {
    this.tag = value;
  }

  getImage(): any {
    return this.http.get(`${API_URL}api_key=${API_KEY}&tag=${this.tag}`);
  }
}
