import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL= environment.API_URL +"/products/";

  SEARCH_URL= environment.API_URL +"/search/";


  constructor(private http: HttpClient) { }

  getAllProducts(query){
    return this.http.get(this.URL + query);
  };

  getProductById(id){
    return this.http.get(this.URL+`${id}`);
  }

  searchProduct(query){
    return this.http.get(this.SEARCH_URL + query);
  }

  getProductsById(id){
    return this.http.get(this.URL)
  }

  updateProduct(id, unit, price, discountPrice){
    let body ={
      units: unit,
      price: price,
      discountedPrice: discountPrice
    }
    return this.http.put(this.URL+ "price/"+id, body);
  }

  
}
