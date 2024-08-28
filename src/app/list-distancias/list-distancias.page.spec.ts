import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDistanciasPage } from './list-distancias.page';

describe('ListDistanciasPage', () => {
  let component: ListDistanciasPage;
  let fixture: ComponentFixture<ListDistanciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDistanciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
