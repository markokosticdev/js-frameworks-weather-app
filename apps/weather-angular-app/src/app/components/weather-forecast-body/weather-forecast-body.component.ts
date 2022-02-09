import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {
  CityForecast,
  Daily,
  Forecast,
  ForecastTile,
  ForecastType,
  Hourly
} from "@js-frameworks-weather-app/weather-types";
import {createForecastTile} from "@js-frameworks-weather-app/weather-helpers";


@Component({
  selector: 'weather-forecast-body [data\\$] [cityForecast]',
  templateUrl: './weather-forecast-body.component.html',
  styleUrls: ['./weather-forecast-body.component.scss'],
})
export class WeatherForecastBodyComponent {

  @Input() data$!: Observable<Forecast>;
  @Input() cityForecast!: CityForecast;

  today: Date = new Date();

  createForecastTile(forecast: Hourly | Daily, forecastType: ForecastType): ForecastTile {
    return createForecastTile(forecast, forecastType);
  }
}
