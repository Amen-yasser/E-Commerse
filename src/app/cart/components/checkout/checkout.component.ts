import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/services/user.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  Confermform!: FormGroup;
  items:any[]=[];
  userId:any;
  totalPrice:any;
  constructor(private formBuilder: FormBuilder,private _UserService:UserService,private _CartService:CartService) {}

  ngOnInit(): void {
    this.Confermform = this.formBuilder.group({
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      status:['pending']
    });
    this._UserService.Userdata.subscribe((res:any)=>{
      this.userId = res.id;
      console.log(this.userId);
    })
    
    this.getItemsFromCart();
  }
  getItemsFromCart()
  {
    this.items  = JSON.parse(localStorage.getItem('items')!);
    this.totalPrice = JSON.parse(localStorage.getItem('totalPrice')!);
    console.log(this.totalPrice);
    console.log(this.items);
  }
  Confirm()
  {
    if(this.Confermform.valid){
      let model ={
        shippingAddress1: this.Confermform.value.address,
        city: this.Confermform.value.city,
        zip: this.Confermform.value.zip,
        country: this.Confermform.value.country,
        phone: this.Confermform.value.phone,
        orderItems: this.items,
        user:this.userId,
        status:this.Confermform.status
      };
      console.log(model);
     this._CartService.createCart(model).subscribe(res=>{
       console.log(res);
     });
     alert("Order Added :)");
     
    }
  }
}
