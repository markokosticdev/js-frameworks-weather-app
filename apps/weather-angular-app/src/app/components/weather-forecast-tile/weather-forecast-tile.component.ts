import {Component, Input} from '@angular/core';
import {ForecastTile} from "@js-frameworks-weather-app/weather-types";

@Component({
  selector: 'weather-forecast-tile [tile]',
  templateUrl: './weather-forecast-tile.component.html',
  styleUrls: ['./weather-forecast-tile.component.scss'],
})
export class WeatherForecastTileComponent {

  @Input() tile!: ForecastTile;
}
