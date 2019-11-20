import { Component, OnInit } from '@angular/core';
import {Cloth} from '../cloth';
import {getSourceFile} from 'tslint';
import {CLOTHES} from '../../assets/clothes';

@Component({
  selector: 'app-cloth-pick',
  templateUrl: './cloth-pick.component.html',
  styleUrls: ['./cloth-pick.component.scss']
})
export class ClothPickComponent implements OnInit {
  private clothes: Cloth[];

  constructor() { }

  ngOnInit() {
    this.getClothes();
  }

  private getClothes() {
    this.clothes = CLOTHES;
  }
}
