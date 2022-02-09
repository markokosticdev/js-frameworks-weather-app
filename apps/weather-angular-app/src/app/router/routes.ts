import {Routes} from "@angular/router";
import {WeatherForecastComponent} from "../components/weather-forecast/weather-forecast.component";

export const routes: Routes = [
  {
    path: "",
    component: WeatherForecastComponent
  },
  {
    path: ":city",
    component: WeatherForecastComponent
  },
  {
    path: ":city/:forecastType",
    component: WeatherForecastComponent
  },
];
