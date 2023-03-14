import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
url: string = "https://ecommercenodeapp1.onrender.com";
cartItems:any[]=[];
itemQuantity:number=1;
totalPrice:any=0;
@ViewChild("quantity") inputQuantity!:ElementRef;
  constructor(private _Router:Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems()
  {
    if('cart' in localStorage)
    {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotalPrice();
  }
  getQuantity(event:any,price:number,index:number)
  {
    this.cartItems[index].q=event.target.value;
    localStorage.setItem("cart",JSON.stringify(this.cartItems));
    this.getTotalPrice();
  }
  getTotalPrice()
  {
    this.totalPrice = 0;
    for(let i in this.cartItems)
    {
      this.totalPrice += this.cartItems[i].price * this.cartItems[i].q;
    }
  }
  DeleteProduct(index:number)
  {
    this.cartItems.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(this.cartItems));
    this.getTotalPrice();
  }
  ClearAllCart()
  {
    this.cartItems=[];
    localStorage.setItem("cart",JSON.stringify(this.cartItems));
    this.getTotalPrice();
  }
  CheckOut()
  {
    let Items = this.cartItems.map((item) => {
      return {
        quantity: item.q,
        product: item._id
      };
    });
    localStorage.setItem('items',JSON.stringify(Items));
    localStorage.setItem('totalPrice',JSON.stringify(this.totalPrice));
    this._Router.navigate(['CheckOut']);
  }
}
