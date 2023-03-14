import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProductsByPageNumber(pageNumber:number)
  {
    return this.http.get(`https://ecommercenodeapp1.onrender.com/someproducts?page=${pageNumber}`);
  }
  getSomeProducts()
  {
    return this.http.get("https://ecommercenodeapp1.onrender.com/someproducts");
  }
  getAllCategory()
  {
    return this.http.get("https://ecommercenodeapp1.onrender.com/Category");
  }
  getPagesNumber()
  {
    return this.http.get("https://ecommercenodeapp1.onrender.com/pages");
  }
  getProductByCatID(id:number)
  {
    return this.http.get("https://ecommercenodeapp1.onrender.com/Category/"+id);
  }
  getProductById(id:number)
  {
    return this.http.get("https://ecommercenodeapp1.onrender.com/products/"+id);
  }
}
