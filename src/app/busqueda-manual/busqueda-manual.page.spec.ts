import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusquedaManualPage } from './busqueda-manual.page';

describe('BusquedaManualPage', () => {
  let component: BusquedaManualPage;
  let fixture: ComponentFixture<BusquedaManualPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
