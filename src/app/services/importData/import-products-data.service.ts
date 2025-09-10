import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsData } from '../../interfaces/products.data';

@Injectable({
  providedIn: 'root'
})
export class ImportProductsDataService {

  private productsData:ProductsData[] = []

  constructor(private http: HttpClient) {
    http.get<ProductsData[]>('assets/config/mock/data_products.json').subscribe(data=> this.productsData = data)
  }

  getAll(){
    return this.productsData
  }

  getProduct(requestedTitle:string){
    return this.productsData.find(product=> product.title === requestedTitle)
  }
}

