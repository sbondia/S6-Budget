import { TestBed } from '@angular/core/testing';

import { ImportProductsDataService } from './import-products-data.service';

describe('ImportProductsDataService', () => {
  let service: ImportProductsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportProductsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
