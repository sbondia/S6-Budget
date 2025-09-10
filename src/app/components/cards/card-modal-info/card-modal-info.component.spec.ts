import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModalInfoComponent } from './card-modal-info.component';

describe('CardModalInfoComponent', () => {
  let component: CardModalInfoComponent;
  let fixture: ComponentFixture<CardModalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardModalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardModalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
