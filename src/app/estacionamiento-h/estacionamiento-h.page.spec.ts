import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstacionamientoHPage } from './estacionamiento-h.page';

describe('EstacionamientoHPage', () => {
  let component: EstacionamientoHPage;
  let fixture: ComponentFixture<EstacionamientoHPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstacionamientoHPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
