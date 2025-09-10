import { Component, Input } from '@angular/core';
import { ProductsData } from '../../../interfaces/products.data';
import { CardModalInfoComponent } from "../card-modal-info/card-modal-info.component";

@Component({
  selector: 'app-card-products',
  imports: [CardModalInfoComponent],
  templateUrl: './card-products.component.html',
  styleUrl: './card-products.component.scss'
})
export class CardProductsComponent {
  @Input() product!:ProductsData
}
