import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {CityForecast, ForecastType} from "@js-frameworks-weather-app/weather-types";

@Component({
  selector: 'weather-forecast-header',
  templateUrl: './weather-forecast-header.component.html',
  styleUrls: ['./weather-forecast-header.component.scss'],
})
export class WeatherForecastHeaderComponent implements OnInit {

  defaultCity = 'Limassol'
  forecastTypes = [ForecastType.Hourly, ForecastType.Daily]

  @Output('onSubmit') submit = new EventEmitter<CityForecast>();

  formGroup!: FormGroup;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formGroup = new FormGroup({
        cityControl: new FormControl(params['city'] ?? this.defaultCity),
        forecastTypeControl: new FormControl(params['forecastType'] ?? this.forecastTypes[0]),
      });

      this.onSubmit();
    });
  }

  onSubmit() {
    this.submit.emit({
      city: this.formGroup.get('cityControl')?.value,
      forecastType: this.formGroup.get('forecastTypeControl')?.value,
    });
  }

}
