import { Component, Input } from '@angular/core';
import { Budget } from '../../../interfaces/budget.data';

@Component({
  selector: 'app-card-budgets',
  imports: [],
  templateUrl: './card-budgets.component.html',
  styleUrl: './card-budgets.component.scss'
})
export class CardBudgetsComponent {
  @Input() budget!:Budget
}
