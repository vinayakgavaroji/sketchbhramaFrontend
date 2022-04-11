import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getLoginUsers(){
    return this.http.get<any>('api/userDetails');
  }

  getUserDetailsById(id: any){
    return this.http.get<[]>('api/userDetailsById/' + id)
  }

  deleteUserById(id: any){
    return this.http.delete<any>('api/deleteUser/' + id)
  }

}
