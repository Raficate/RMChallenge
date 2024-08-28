import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListDesafiosPage } from './list-desafios.page';

describe('ListDesafiosPage', () => {
  let component: ListDesafiosPage;
  let fixture: ComponentFixture<ListDesafiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesafiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
