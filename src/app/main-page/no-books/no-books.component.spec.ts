import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBooksComponent } from './no-books.component';

describe('NoBooksComponent', () => {
  let component: NoBooksComponent;
  let fixture: ComponentFixture<NoBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
