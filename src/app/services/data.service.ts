import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers = new HttpHeaders();
  amount 
  constructor(
    public http: HttpClient
  ) { 
    this.amount =500
  }

 getData() {
    return this.http.get('./assets/data/response_airtime.json', { headers: this.headers });
  }

}
