import {v4 as uuid} from 'uuid';

export class Cloth {
  id: number;
  temperature: number;
  type: string;
  image: any;

  constructor(temperature?: number, type?: string, image?: string) {
    this.id = uuid();
    this.temperature = temperature ? temperature : 5;
    this.type = type ? type : 'body';
    this.image = image ? image : 'http://lorempixel.com/200/200/';
  }
}
