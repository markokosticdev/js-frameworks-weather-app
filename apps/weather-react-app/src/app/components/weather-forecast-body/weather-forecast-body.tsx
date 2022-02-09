import './weather-forecast-body.module.scss';
import {Observable} from "rxjs";
import {AsyncWrapper, CityForecast, Forecast} from "@js-frameworks-weather-app/weather-types";
import {useEffect, useState} from "react";
import WeatherForecastTile from "../weather-forecast-tile/weather-forecast-tile";
import {
  createForecastTile,
  filterForecast,
  formatDate,
  titlecase,
  withStatus
} from "@js-frameworks-weather-app/weather-helpers";

/* eslint-disable-next-line */
export interface TestComponentProps {
  data$: Observable<Forecast>,
  cityForecast: CityForecast
}

export function WeatherForecastBody(props: TestComponentProps) {

  const [data, setData] = useState<AsyncWrapper<Forecast> | undefined>(undefined);
  const [cityForecast, setCityForecast] = useState<CityForecast | undefined>(undefined);

  useEffect(() => {
    withStatus(props.data$).subscribe(dataValue => {
      if (dataValue.value) {
        dataValue.value = filterForecast(dataValue.value, props.cityForecast.forecastType)
      }
      setData(dataValue);
      setCityForecast(props.cityForecast);
    });
  }, [props]);


  const today: Date = new Date();

  return (
    <div className="card">
      {data &&
      <>
        {data.value && cityForecast &&
        <div className="card-header bg-white">
          <h4 className="mt-2">
            {titlecase(cityForecast!.city)} {titlecase(cityForecast!.forecastType)} Forecast {cityForecast!.forecastType === 'hourly' && 'for ' + formatDate(today)}
          </h4>
        </div>
        }

        <div className="card-body">
          <div className="row my-n3">
            {data.value && cityForecast && (() => {
              if (data.value.hourly) {
                return data.value.hourly.map((hour, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={index}>
                      <WeatherForecastTile tile={createForecastTile(hour, cityForecast.forecastType)}/>
                    </div>
                  )
                });
              } else if (data.value.daily) {
                return data.value.daily.map((day, index) => {
                  return (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={index}>
                      <WeatherForecastTile tile={createForecastTile(day, cityForecast.forecastType)}/>
                    </div>
                  )
                });
              } else {
                return '';
              }
            })()}
            {!data.loading && !data.value &&
            <div className="col">
              <h4 className=" text-center">
                Not Found
              </h4>
            </div>
            }
            {data.error &&
            <div className="col">
              <h4 className=" text-center">
                Error
              </h4>
            </div>
            }
            {data.loading && !data.error &&
            <div className="col">
              <h4 className=" text-center">
                Loading...
              </h4>
            </div>
            }
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default WeatherForecastBody;
