import {RouteRecordRaw} from "vue-router";
import WeatherForecast from "../components/weather-forecast/WeatherForecast.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: WeatherForecast
  },
  {
    path: ":city",
    component: WeatherForecast
  },
  {
    name: 'weather-forecast',
    path: ":city/:forecastType",
    component: WeatherForecast
  },
];
