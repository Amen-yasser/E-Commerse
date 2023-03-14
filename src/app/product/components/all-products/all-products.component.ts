import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  url: string = "https://ecommercenodeapp1.onrender.com";
  pageList: any[] = [];
  categories: any[] = [];
  CartProduct: any[] = [];
  isLoading:boolean=false;
  q?:number;
  catImage: any[] = ['assets/Images/56d6e69078d66f039d6b8c5237010fe2.jpg',
                      'assets/Images/5879209d2ea6dec9f551e8799a569345.jpg',
                      'assets/Images/81f707cec68710adef478bb0084839a6.jpg',
                      'assets/Images/j.png'];

  combinedList: any[] = [];
  constructor(private productSer: ProductsService,
              private _UserService: UserService, 
              private _Router: Router) {}

  ngOnInit(): void {
    this.getSomeProduct();
    this.getpageCount();
    this.getAllCategory();
  }

  getSomeProduct() {
    this.isLoading=true;
    this.productSer.getSomeProducts().subscribe((res: any) => {
      this.isLoading=false;
      this.products = res.Products;
      console.log(this.products);
    });
  }
  getProductsByPageNumber(pageNumber: number) {
    this.productSer.getAllProductsByPageNumber(pageNumber).subscribe((res: any) => {
      this.products = res.Products;
      console.log(this.products);
    });
  }

  getpageCount() {
    this.productSer.getPagesNumber().subscribe((res: any) => {
      this.pageList.length = res.pages;
    });
  }

  getAllCategory() {
    this.isLoading=true;
    this.productSer.getAllCategory().subscribe((res: any) => {
      this.isLoading=false;
      this.categories = res.data;
      for (let i = 0; i < this.catImage.length; i++) {
        this.combinedList.push({ lest1: this.categories[i], lest2: this.catImage[i] });
      }
    });
  }
  getProductByCatId(catId: number) {
    this.isLoading=true;
    this.productSer.getProductByCatID(catId).subscribe((res: any) => {
      this.isLoading=true;
      this.products = res.Data;
    })
  }

  AddToCart(item: any) 
  {
    if (this._UserService.Userdata.getValue() != null) 
    {
    
      item.q=1;
      console.log(item);
      if ("cart" in localStorage) 
      {
        this.CartProduct = JSON.parse(localStorage.getItem("cart")!);
        let exist = this.CartProduct.find(i => i._id == item._id);
        if (exist) 
        {
          alert("this Product is Already Added in your Cart");
        }
        else 
        {
          this.CartProduct.push(item);
          localStorage.setItem("cart", JSON.stringify(this.CartProduct));
        }
      } else {
        this.CartProduct.push(item);
        localStorage.setItem("cart", JSON.stringify(this.CartProduct));
      }
     //let userID = this._UserService.Userdata['_value'].id;
      //console.log("OK");
      //console.log(item);
    }
    else {
      alert("You should login first!!!");
      this._Router.navigate(['Login']);

    }
  }
}
