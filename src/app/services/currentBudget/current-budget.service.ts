import { Injectable } from '@angular/core';
import { Budget } from '../../interfaces/budget.data';
import { ProductsData } from '../../interfaces/products.data';

@Injectable({
  providedIn: 'root'
})
export class CurrentBudgetService {

  private currentBudget:Budget|undefined = undefined

  constructor() {}

  addClientData(client:any){
    console.warn('addclientdata')
  }
}
