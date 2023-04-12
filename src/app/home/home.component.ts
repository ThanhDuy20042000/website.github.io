import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  public name = ''
  public age = 0
  public myArray = [
    'Toyota',
    'Yamaha',
    'Suzuki'
  ]

  public demoAngular() {
    this.age++
  }
}
