import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CurrentBudgetService } from '../../../services/currentBudget/current-budget.service';

@Component({
  selector: 'app-card-form',
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.scss'
})

export class CardFormComponent {

  client = new FormGroup({
    name : new FormControl<string>(''),
    phone : new FormControl<number|undefined>(undefined),
    email : new FormControl<string|undefined>('')
  })

  constructor(public currentBudget: CurrentBudgetService) {

  }

  addClient(){
    this.currentBudget.addClientData(this.client)
  }
}
