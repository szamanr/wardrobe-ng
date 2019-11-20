import { Component, OnInit } from '@angular/core';
import {Cloth} from '../cloth';
import {CLOTHES} from '../../assets/mocks/clothes';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-cloth-pick',
  templateUrl: './cloth-pick.component.html',
  styleUrls: ['./cloth-pick.component.scss']
})
export class ClothPickComponent implements OnInit {
  /**
   * list of available clothes
   */
  private clothes: Cloth[];

  /**
   * clothes currently selected for wearing
   */
  private clothSet: boolean[] = [];

  /**
   * the value indicating how cold / warm we'll feel if wearing the currently selected clothes in the current weather
   */
  thermometer: number;

  /**
   * current climate info: temperature, wind, precipitation
   */
  private climate: any;

  constructor() { }

  ngOnInit() {
    this.clothes = this.getClothes();
    this.climate = this.getCurrentClimate();

    this.updateThermometer();
  }

  private getClothes() {
    return CLOTHES;
  }

  /**
   * adds / removes cloth from current set
   * @param cloth the selected cloth item
   */
  toggle(cloth: Cloth) {
    this.clothSet[cloth.id] = (typeof this.clothSet[cloth.id] !== 'undefined') ? !this.clothSet[cloth.id] : true;

    console.log(this.clothSet[cloth.id]);

    if (!environment.production) {
      console.log(`current cloth set: ${this.clothSet.toString()}`);
    }

    this.updateThermometer();
  }

  private updateThermometer() {
    const selectedClothes = this.clothes.filter((cloth) => {
      return this.clothSet[cloth.id];
    });

    // compute the sum of temperatures of all clothes in the current set
    const currentSetTemperature = selectedClothes.map((item) => {
      return item.temperature;
    }).reduce((a, b) => a + b, 0);

    // compare that with the current temperature to get the thermometer value
    const feltTemperature = this.computeFeltTemperature();
    this.thermometer = currentSetTemperature - feltTemperature;
  }

  /**
   * computes temperature felt based on temperature, wind and precipitation
   */
  private computeFeltTemperature() {
    return this.climate.temperature - Math.round(this.climate.wind / 10) - 5 * this.climate.rain - 5 * this.climate.snow;
  }

  /**
   * gets current climate condition from weather service
   */
  private getCurrentClimate() {
    return {
      temperature: 10,
      wind: 0,
      rain: false,
      snow: false
    };
  }
}
