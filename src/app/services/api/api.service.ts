import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  post(endpoint: string, body: object, options:any){
    return this.httpClient.post(this.getFullUrl(endpoint), body, options);
  }

  get(endpoint:string){
    return this.httpClient.get(this.getFullUrl(endpoint));
  }

  getWithParams(endpoint:string, parameters: any){
    return this.httpClient.get(this.getFullUrl(endpoint), {
      params: parameters
    });
  }

  getFullUrl(endpoint: string){
    return `http://localhost:8080${endpoint}`;
  }
}
