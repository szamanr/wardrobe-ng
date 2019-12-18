import {Component, OnInit} from '@angular/core';
import {Cloth} from '../cloth';
import {CLOTHES} from '../../assets/mocks/clothes';
import {WEATHERS} from '../../assets/mocks/weather-conditions';
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
  thermometer: {
    value: number,
    label: string,
    class: string,
  };

  /**
   * current climate info: temperature, wind, precipitation
   */
  private climate: any;

  /**
   * the felt temperature computed from climate data
   */
  private feltTemperature: number;

  /**
   * current location coordinates and display name
   */
  private location: any;

  /**
   * are we in edit mode
   */
  editing = false;

  /**
   * should we display debug info in the footer
   */
  debugMode = true;

  /**
   * the base temperature, for which no clothes are needed
   * modifiable in user settings in the future
   */
  private zeroTemperature = 22;
  weatherConditions: any[];

  constructor() {
  }

  ngOnInit() {
    this.clothes = this.getClothes();
    this.climate = this.getCurrentClimate();
    this.location = {
      value: '50.0466814,19.86479,11',
      name: 'kraków'
    };
    this.weatherConditions = this.getWeatherConditions();

    this.updateThermometer();

    // force non-debug mode in production
    if (environment.production) {
      this.debugMode = false;
    }
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

  /**
   * updates the value of the thermometer
   * @todo: this should happen automatically
   */
  private updateThermometer() {
    const selectedClothes = this.clothes.filter((cloth) => {
      return this.clothSet[cloth.id];
    });

    // compute the sum of temperatures of all clothes in the current set
    const currentSetTemperature = selectedClothes.map((item) => {
      return item.temperature;
    }).reduce((a, b) => a + b, 0);

    // compare that with the current temperature to get the thermometer value
    this.feltTemperature = this.computeFeltTemperature();
    const value = this.feltTemperature - this.zeroTemperature + currentSetTemperature;

    // set the label, like "a little too cold"
    const [label, className] = this.getLabel(value);

    this.thermometer = {
      value,
      label,
      class: className
    };
  }

  /**
   * computes temperature felt based on temperature, wind and precipitation
   */
  private computeFeltTemperature() {
    // adjust for precipitation
    let tempDifConditions = 0;
    switch (this.climate.conditions) {
      case 'rain':
        tempDifConditions = -5;
        break;
      case 'snow':
        tempDifConditions = -5;
        break;
      case 'sunny':
      case 'cloudy':
        tempDifConditions = 0;
        break;
      default:
        tempDifConditions = 0;
    }

    // adjust for activity
    let tempDifActivity = 0;
    switch (this.climate.activity) {
      case 'cycling':
        tempDifActivity = -5;
        break;
      case 'running':
        tempDifActivity = 5;
        break;
      case 'walking':
        tempDifActivity = 0;
        break;
      default:
        tempDifActivity = 0;
    }

    return this.climate.temperature - Math.round(this.climate.wind / 10) + tempDifConditions + tempDifActivity;
  }

  /**
   * gets current climate condition from weather service
   */
  private getCurrentClimate() {
    return {
      temperature: 10,
      wind: 0,
      conditions: 'sunny',
      activity: 'walking',
    };
  }

  /**
   * TODO: move to thermometer service
   * returns a user-readable label
   * @param value temperature
   */
  private getLabel(value: number) {
    // @formatter:off
    if (value === 0) { return ['perfect!', 'bg-success']; }

    if (value <= -20) { return ['much too cold!', 'bg-danger']; }
    if (value <= -5) { return ['too cold', 'bg-danger']; }
    if (value <= -2) { return ['a little too cold', 'bg-warning']; }

    if (value <= 2) { return ['ok', 'bg-success']; }

    if (value < 5) { return ['a little too warm', 'bg-warning']; }
    if (value < 20) { return ['too warm', 'bg-danger']; }
    if (value > 20) { return ['much too warm!', 'bg-danger']; }
    // @formatter:on
  }

  /**
   * detect key press. if enter, set the temperature and exit edit mode.
   *
   * @param event keyboard event
   */
  onTemperatureManuallyChanged(event: KeyboardEvent) {
    // exit edit mode when enter pressed
    if (event.key === 'Enter') {
      this.editing = false;
      this.updateThermometer();
    }
  }

  /**
   * fetches possible weather conditions such as sunny, cloudy, rainy
   */
  private getWeatherConditions() {
    return WEATHERS;
  }
}
