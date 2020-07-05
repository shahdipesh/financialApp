import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 user:any=[]

  constructor(private http:HttpClient) { }

  getUser(){
    console.log ("user service");
    this.user=this.http.post('/user',{
      "username":"dipendra",
      "password":"9841595448"
    }).toPromise().then((data)=>console.log(data))

}
}
