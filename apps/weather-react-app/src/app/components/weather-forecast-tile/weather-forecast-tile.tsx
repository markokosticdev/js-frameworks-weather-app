import './weather-forecast-tile.module.scss';
import {roundNumber, titlecase} from "@js-frameworks-weather-app/weather-helpers";
import {ForecastTile} from "@js-frameworks-weather-app/weather-types";

/* eslint-disable-next-line */
export interface WeatherForecastProps {
  tile: ForecastTile
}

export function WeatherForecastTile(props: WeatherForecastProps) {

  const tile = props.tile;

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <h4 className="col-12 text-center">{roundNumber(tile.realTemp)} °C</h4>
          <h5 className="col-12 text-center">Feels like</h5>
          <h4 className="col-12 text-center">{roundNumber(tile.feelsTemp)} °C</h4>
        </div>
        <div className="row">
          <img className="col-12 my-n5 img-fluid text-center" src={tile.weatherIcon}/>
          <h5 className="col-12 mt-1 text-center">{titlecase(tile.weatherTitle)}</h5>
          <div className="col-12 text-center">{titlecase(tile.weatherDescription)}</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecastTile;
