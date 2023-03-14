import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/product/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
categories:any[]=[];
someProduct:any[]=[];
isLoading:boolean=false;
url:string="https://ecommercenodeapp1.onrender.com";
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getSomeProducts();
  }

  getAllCategory()
  {
    this.isLoading=true;
    this._ProductsService.getAllCategory().subscribe((res:any)=>{
      this.isLoading=false;
      this.categories=res.data;
    });
  }

  getSomeProducts()
  {
    this.isLoading=true;
    this._ProductsService.getSomeProducts().subscribe((res:any)=>{
      this.isLoading=false;
      this.someProduct=res.Products;
    });
  }
}
