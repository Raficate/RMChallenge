import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEjercicioPage } from './add-ejercicio.page';

describe('AddEjercicioPage', () => {
  let component: AddEjercicioPage;
  let fixture: ComponentFixture<AddEjercicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
