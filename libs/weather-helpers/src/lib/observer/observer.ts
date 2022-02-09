import {catchError, defaultIfEmpty, map, Observable, of, startWith} from "rxjs";
import {AsyncWrapper} from "@js-frameworks-weather-app/weather-types";

export function withStatus<T>(value: Observable<T> | undefined): Observable<AsyncWrapper<T>> {
  return value ? value.pipe(
    map((oldValue: T) => ({loading: false, value: oldValue} as AsyncWrapper<T>)),
    defaultIfEmpty({loading: false, value: null} as AsyncWrapper<T>),
    startWith({loading: true, value: null} as AsyncWrapper<T>),
    catchError(error => of({loading: false, error} as AsyncWrapper<T>)),
  ) : of({loading: false, value: value} as AsyncWrapper<T>);
}
