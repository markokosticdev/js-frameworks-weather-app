import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from "rxjs";
import {AsyncWrapper} from "@js-frameworks-weather-app/weather-types";
import {withStatus} from "@js-frameworks-weather-app/weather-helpers";

@Pipe({
  name: 'withStatus'
})
export class WithStatusPipe implements PipeTransform {

  transform<T>(value: Observable<T> | undefined): Observable<AsyncWrapper<T>> {
    return withStatus<T>(value)
  }

}
