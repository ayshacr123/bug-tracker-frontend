import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBugViewComponent } from './single-bug-view.component';

describe('SingleBugViewComponent', () => {
  let component: SingleBugViewComponent;
  let fixture: ComponentFixture<SingleBugViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBugViewComponent]
    });
    fixture = TestBed.createComponent(SingleBugViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
