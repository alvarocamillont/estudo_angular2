import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploPipeComponent } from './exemplo-pipe.component';

describe('ExemploPipeComponent', () => {
  let component: ExemploPipeComponent;
  let fixture: ComponentFixture<ExemploPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
