import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailEjercicioPage } from './detail-ejercicio.page';

describe('DetailEjercicioPage', () => {
  let component: DetailEjercicioPage;
  let fixture: ComponentFixture<DetailEjercicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEjercicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
