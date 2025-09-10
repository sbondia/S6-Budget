import { Component } from '@angular/core';
import { CardBannerComponent } from "../../components/cards/card-banner/card-banner.component";
import { CardProductsComponent } from "../../components/cards/card-products/card-products.component";
import { CardFormComponent } from "../../components/cards/card-form/card-form.component";
import { CardBudgetsComponent } from "../../components/cards/card-budgets/card-budgets.component";
import { ImportProductsDataService } from '../../services/importData/import-products-data.service';

@Component({
  selector: 'app-mainpage',
  imports: [CardBannerComponent, CardProductsComponent, CardFormComponent, CardBudgetsComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})

export class MainpageComponent {
  constructor(public importProductsService: ImportProductsDataService) {}
}
