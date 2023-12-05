import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstacionamientoiPage } from './estacionamientoi.page';

describe('EstacionamientoiPage', () => {
  let component: EstacionamientoiPage;
  let fixture: ComponentFixture<EstacionamientoiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstacionamientoiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
