import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AadhaarService {

  constructor(private hc:HttpClient) { }
  createUser(obj:any):Observable<any>{
    return this.hc.post("/user/createaadhaar",obj)
  }
  getUser():Observable<any>{
    return this.hc.get("/user/getaadhaar")
  }
}
