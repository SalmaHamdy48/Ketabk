import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChoiceCardComponent } from './single-choice-card-component';

describe('SingleChoiceCardComponent', () => {
  let component: SingleChoiceCardComponent;
  let fixture: ComponentFixture<SingleChoiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleChoiceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleChoiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
