import './weather-forecast-header.module.scss';
import {CityForecast, ForecastType} from "@js-frameworks-weather-app/weather-types";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useParams} from 'react-router-dom';
import {titlecase} from "@js-frameworks-weather-app/weather-helpers";

/* eslint-disable-next-line */
export interface WeatherForecastHeaderProps {
  onSubmit: (cityForecastValue: CityForecast) => void
}

export function WeatherForecastHeader(props: WeatherForecastHeaderProps) {

  const defaultCity = 'Limassol'
  const forecastTypes = [ForecastType.Hourly, ForecastType.Daily]

  const {register, handleSubmit, setValue, getValues} = useForm<CityForecast>({
    mode: 'onSubmit'
  });

  const {city, forecastType} = useParams();

  useEffect(() => {
    setValue('city', city ?? defaultCity);
    setValue('forecastType', forecastType as ForecastType ?? forecastTypes[0]);

    onSubmit();
  }, []);

  const onSubmit = () => {
    props.onSubmit({
      city: getValues('city'),
      forecastType: getValues('forecastType'),
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-12 col-md-12 col-lg-6">
            <label htmlFor="city" className="font-weight-bold visually-hidden">City</label>
            <input id="city" type="text" className="form-control" {...register('city')}/>
          </div>
          <div className="col-12 col-md-8 col-lg-3 mt-3 mt-md-0">
            <label htmlFor="forecastType" className="font-weight-bold visually-hidden">Forecast Type</label>
            <select id="forecastType" className="form-control" {...register('forecastType')}>
              {
                forecastTypes.map(forecastType => {
                  return (
                    <option value={forecastType} key={forecastType}>
                      {titlecase(forecastType)}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className=" col-12 col-md-4 col-lg-3">
            <label className="font-weight-bold visually-hidden">&nbsp;</label>
            <button type="submit" className="btn btn-primary btn-block font-weight-bold">Get Forecast</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WeatherForecastHeader;
