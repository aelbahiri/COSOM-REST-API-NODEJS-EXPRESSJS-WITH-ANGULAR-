import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi: string;
  constructor(private http: HttpClient) {
    this.urlApi = "http://localhost:5000/users"
   }

   getAll(){
   return  this.http.get(this.urlApi);
   }

 
}
