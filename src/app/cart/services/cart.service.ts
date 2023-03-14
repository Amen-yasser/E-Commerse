import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  createCart(model:any)
  {
    return this._HttpClient.post("https://ecommercenodeapp1.onrender.com/orders",model);
  }
}
