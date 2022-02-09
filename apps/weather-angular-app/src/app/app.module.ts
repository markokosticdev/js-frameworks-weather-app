import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {WeatherForecastComponent} from './components/weather-forecast/weather-forecast.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WeatherForecastHeaderComponent} from "./components/weather-forecast-header/weather-forecast-header.component";
import {WeatherForecastBodyComponent} from "./components/weather-forecast-body/weather-forecast-body.component";
import {WithStatusPipe} from "./pipes/with-status/with-status.pipe";
import {FilterForecastPipe} from "./pipes/filter-forecast/filter-forecast.pipe";
import {AppRouterModule} from "./router/app-router.module";
import {WeatherForecastTileComponent} from "./components/weather-forecast-tile/weather-forecast-tile.component";


@NgModule({
  declarations: [AppComponent, WeatherForecastComponent, WeatherForecastHeaderComponent, WeatherForecastBodyComponent, WeatherForecastTileComponent, WithStatusPipe, FilterForecastPipe],
  imports: [AppRouterModule, BrowserModule, BrowserAnimationsModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
