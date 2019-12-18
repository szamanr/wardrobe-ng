import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothPickComponent } from './cloth-pick.component';
import {FormsModule} from '@angular/forms';

describe('ClothPickComponent', () => {
  let component: ClothPickComponent;
  let fixture: ComponentFixture<ClothPickComponent>;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothPickComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set values on init', () => {
    fixture.whenStable().then(() => {
      expect(component.clothes).toBeDefined();
      expect(component.climate).toBeDefined();
      expect(component.location).toBeDefined();
      expect(component.weatherConditions).toBeDefined();
      expect(component.feltTemperature).toBeDefined();
      expect(component.thermometer).toBeDefined();
    });
  });

  describe('thermometer element', () => {
    let thermometerElement;
    beforeEach(() => {
      thermometerElement = compiled.querySelector('#thermometer');
    });

    it('should exist', () => {
      expect(thermometerElement).toBeDefined();
    });

    it('should display the starting conditions without clothes', () => {
      const expectedValue = component.feltTemperature - component.zeroTemperature;
      const expectedLabel = component.getLabel(expectedValue);
      expect(thermometerElement.textContent).toContain(expectedLabel[0]);
      expect(thermometerElement.querySelector('#thermometer-bar').className).toContain(expectedLabel[1]);
    });
  });
});
