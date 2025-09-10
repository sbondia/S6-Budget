import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBudgetsComponent } from './card-budgets.component';

describe('CardBudgetsComponent', () => {
  let component: CardBudgetsComponent;
  let fixture: ComponentFixture<CardBudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBudgetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
