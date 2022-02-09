import {Pipe, PipeTransform} from '@angular/core';
import {Forecast, ForecastType} from "@js-frameworks-weather-app/weather-types";
import {filterForecast} from "@js-frameworks-weather-app/weather-helpers";

@Pipe({
  name: 'filterForecast'
})
export class FilterForecastPipe implements PipeTransform {

  transform(forecast: Forecast, forecastType: ForecastType): Forecast {
    return filterForecast(forecast, forecastType);
  }
}
