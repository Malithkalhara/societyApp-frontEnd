import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  uri='http://localhost:3000';

  constructor(private http:HttpClient) { }

  registerSociety(data){
    return this.http.post(`${this.uri}/societies/register`,data);
  };
};
