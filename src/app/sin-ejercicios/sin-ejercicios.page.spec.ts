import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinEjerciciosPage } from './sin-ejercicios.page';

describe('SinEjerciciosPage', () => {
  let component: SinEjerciciosPage;
  let fixture: ComponentFixture<SinEjerciciosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SinEjerciciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
