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
    expect(component.clothes).toBeDefined();
    expect(component.climate).toBeDefined();
    expect(component.location).toBeDefined();
    expect(component.weatherConditions).toBeDefined();
    expect(component.feltTemperature).toBeDefined();
    expect(component.thermometer).toBeDefined();
  });

  describe('thermometer element', () => {
    let element;
    beforeEach(() => {
      element = compiled.querySelector('#thermometer');
    });

    it('should exist', () => {
      expect(element).toBeDefined();
    });

    it('should display the starting conditions without clothes', () => {
      const expectedValue = component.feltTemperature - component.zeroTemperature;
      const expectedLabel = component.getLabel(expectedValue);
      expect(element.textContent).toContain(expectedLabel[0]);
      expect(element.querySelector('#thermometer-bar').className).toContain(expectedLabel[1]);
    });
  });

  describe('climate element', () => {
    let element;
    beforeEach(() => {
      element = compiled.querySelector('#climate');
    });

    it('should exist', () => {
      expect(element).toBeDefined();
    });

    describe('weather conditions', () => {
      let parentElement;
      beforeEach(() => {
        parentElement = element;
        element = parentElement.querySelector('#climate-conditions');
      });

      it('should exist', () => {
        expect(element).toBeDefined();
      });

      it('should display current temperature', () => {
        expect(element.textContent).toContain(component.climate.temperature);
      });

      it('should display current conditions', () => {
        const currentConditions = component.climate.conditions;
        expect(element.textContent).toContain(component.weatherConditions.find(
          weatherCondition => weatherCondition.value === currentConditions
        ).icon);
      });

      // TODO: implement test
      xit('should modify temperature', () => {
      });

      // TODO: implement test
      xit('should modify conditions', () => {
      });
    });

    describe('location', () => {
      let parentElement;
      beforeEach(() => {
        parentElement = element;
        element = parentElement.querySelector('#climate-location');
      });

      it('should exist', () => {
        expect(element).toBeDefined();
      });

      it('should display current location', () => {
        const inputElement = element.querySelector('input');
        expect(inputElement.getAttribute('ng-reflect-model')).toEqual(component.location.name);
      });

      // TODO: implement functionality and test
      xit('should search for location', () => {
      });
    });

    describe('activity', () => {
      let parentElement;
      beforeEach(() => {
        parentElement = element;
        element = parentElement.querySelector('#climate-activity');
      });

      it('should exist', () => {
        expect(element).toBeDefined();
      });

      it('should display current activity', () => {
        const inputElements = element.querySelectorAll('input');
        expect(inputElements.length).toEqual(3);

        const currentActivity = component.climate.activity;
        for (const el of inputElements) {
          expect(el.getAttribute('ng-reflect-model')).toEqual(currentActivity);
        }
      });

      // TODO: implement test
      xit('should modify activity', () => {
      });
    });
  });
});
