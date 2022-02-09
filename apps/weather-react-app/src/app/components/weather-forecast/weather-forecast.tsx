import './weather-forecast.module.scss';
import {CityForecast, Forecast} from "@js-frameworks-weather-app/weather-types";
import {WeatherForecastHeader} from "../weather-forecast-header/weather-forecast-header";
import {WeatherForecastBody} from "../weather-forecast-body/weather-forecast-body";
import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import {Observable} from "rxjs";
import {WeatherForecastApi} from "@js-frameworks-weather-app/weather-services";

/* eslint-disable-next-line */
export interface WeatherForecastProps {
}

export function WeatherForecast(props: WeatherForecastProps) {

  const [data$, setData$] = useState<Observable<Forecast> | undefined>(undefined);
  const [cityForecast, setCityForecast] = useState<CityForecast | undefined>(undefined);

  const navigate = useNavigate();

  const weatherService = new WeatherForecastApi()

  const onSubmit = (cityForecastValue: CityForecast): void => {
    if (cityForecastValue.city && cityForecastValue.forecastType) {
      setCityForecast(cityForecastValue);
      setData$(weatherService.getWeatherForCity(cityForecastValue))
      navigate(`/${cityForecastValue.city}/${cityForecastValue.forecastType}`);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <WeatherForecastHeader onSubmit={($event) => onSubmit($event)}/>
        </div>
      </div>
      {data$ && cityForecast &&
      <div className="row mt-3">
        <div className="col">
          <WeatherForecastBody data$={data$} cityForecast={cityForecast}/>
        </div>
      </div>
      }
    </>
  );
}

export default WeatherForecast;
