import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecaseComponent } from './titlecase.component';

describe('TitlecaseComponent', () => {
  let component: TitlecaseComponent;
  let fixture: ComponentFixture<TitlecaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitlecaseComponent]
    });
    fixture = TestBed.createComponent(TitlecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
