import { TestBed } from '@angular/core/testing';

import { CurrentBudgetService } from './current-budget.service';

describe('CurrentBudgetService', () => {
  let service: CurrentBudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentBudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
