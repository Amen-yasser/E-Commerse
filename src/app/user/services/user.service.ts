import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Userdata = new BehaviorSubject(null);
  constructor(private http:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('userToken')!=null)
    {
      this.saveUserData();
    }
  }


  saveUserData()
  {
    let encodedUserData = JSON.stringify(localStorage.getItem('userToken'));
    this.Userdata.next(jwtDecode(encodedUserData));
    console.log(this.Userdata);
  }

  Register(user:any)
  {
    return this.http.post("https://ecommercenodeapp1.onrender.com/register",user);
  } 
 
  Login(user:any)
  {
    return this.http.post("https://ecommercenodeapp1.onrender.com/login",user);
  }

  Logout()
  {
    localStorage.removeItem('userToken');
    this.Userdata.next(null);
    this._Router.navigate(['Login']);
  }
}
