import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPesosPage } from './list-pesos.page';

describe('ListPesosPage', () => {
  let component: ListPesosPage;
  let fixture: ComponentFixture<ListPesosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPesosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
