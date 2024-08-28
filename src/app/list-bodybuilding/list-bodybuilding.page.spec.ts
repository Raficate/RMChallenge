import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBodybuildingPage } from './list-bodybuilding.page';

describe('ListBodybuildingPage', () => {
  let component: ListBodybuildingPage;
  let fixture: ComponentFixture<ListBodybuildingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBodybuildingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
