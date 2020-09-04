import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_KEY, API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
    ) { }

  public tag: string;

  getTag(value: string): string {
    return this.tag = value;
  }

  getImage(): any {
    console.log(this.tag);
    return this.http.get(`${API_URL}api_key=${API_KEY}&tag=${this.tag}`);
  }
}
