import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  name:string;
  speed:number;
  model:string;
  colors:Colors;
  options:string[];
  isEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'PS8';
    this.colors = {
      car: 'Белый',
      salon: 'Черный',
      wheels: 'Серебро'
    };
    this.options = ['ABS', 'Автопилот', 'Авто паркинг'];

  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option) {
    for(let i = 0; i < this.options.length; i++) {
      if(this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName) {
    if(carName == 'bmw'){
      this.name = 'BMW';
      this.speed = 200;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Бежевый',
        wheels: 'Серебро'
      };
      this.options = ['ABS', 'Круиз контроль'];
      } else if (carName == 'audi') {
        this.name = 'Audi';
        this.speed = 235;
        this.model = 'PS8';
        this.colors = {
          car: 'Белый',
          salon: 'Черный',
          wheels: 'Серебро'
        };
        this.options = ['ABS', 'Автопилот', 'Авто паркинг'];
      } else {
        this.name = 'Mersedes';
        this.speed = 180;
        this.model = 'C180';
        this.colors = {
          car: 'Красный',
          salon: 'Черный',
          wheels: 'Серебро'
        };
        this.options = ['ABS', 'Круиз Контроль', 'Авто паркинг'];
      }

  }

}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}
