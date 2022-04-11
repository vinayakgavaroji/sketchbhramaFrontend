import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getLoginUsers(){
    return this.http.get<any>('api/registeredUsers');
  }

  registerUser(body: any){
    return this.http.post('api/registerUser', body);
  }

  logout(){
    return this.http.get<any>('api/logout');
  }

}
