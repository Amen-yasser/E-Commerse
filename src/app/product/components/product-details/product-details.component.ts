import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productId:any;
url: string = "https://ecommercenodeapp1.onrender.com";
productDetails:any;
  constructor(private _ProductsService:ProductsService,private _ActivatedRoute:ActivatedRoute) { 
    this.productId = this._ActivatedRoute.snapshot.paramMap.get("id");
    console.log(this.productId);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct()
  {
    this._ProductsService.getProductById(this.productId).subscribe((res:any)=>{
      this.productDetails=res.Data;
    })
  }
}
