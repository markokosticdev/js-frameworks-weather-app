import WeatherForecast from "../components/weather-forecast/weather-forecast";

export interface Route {
  path: string,
  component: JSX.Element
}

export const routes: Route[] = [
  {
    path: "",
    component: <WeatherForecast/>
  },
  {
    path: ":city",
    component: <WeatherForecast/>
  },
  {
    path: ":city/:forecastType",
    component: <WeatherForecast/>
  },
];
