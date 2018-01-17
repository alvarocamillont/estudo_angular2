import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasPersonalizadasComponent } from './diretivas-personalizadas.component';

describe('DiretivasPersonalizadasComponent', () => {
  let component: DiretivasPersonalizadasComponent;
  let fixture: ComponentFixture<DiretivasPersonalizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasPersonalizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasPersonalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
