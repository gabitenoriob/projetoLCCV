import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaNomesComponent } from './consulta-nomes.component';

describe('ConsultaNomesComponent', () => {
  let component: ConsultaNomesComponent;
  let fixture: ComponentFixture<ConsultaNomesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaNomesComponent]
    });
    fixture = TestBed.createComponent(ConsultaNomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
