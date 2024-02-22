import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bite } from './bite';

@Injectable({
  providedIn: 'root'
})
export class BiteService {
  private baseUrl:string="http://localhost:4201/api/bite"
  constructor(private http: HttpClient) {

  }


  addBite(bite:any){
    return this.http.post(this.baseUrl, bite);
  }

  getBites(){
    return this.http.get(this.baseUrl);
  }
}
