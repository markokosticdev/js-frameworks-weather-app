<template>
  <div class="row">
    <div class="col">
      <weather-forecast-header @onSubmit="onSubmit($event)"/>
    </div>
  </div>
  <div class="row mt-3" v-if="data$ && cityForecast">
    <div class="col">
      <weather-forecast-body :data$="data$" :cityForecast="cityForecast"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {CityForecast, Forecast} from "@js-frameworks-weather-app/weather-types";
import {Observable} from "rxjs";
import {WeatherForecastApi} from '@js-frameworks-weather-app/weather-services';
import WeatherForecastHeader from "../weather-forecast-header/WeatherForecastHeader.vue";
import WeatherForecastBody from "../weather-forecast-body/WeatherForecastBody.vue";

export default defineComponent({
  components: {
    WeatherForecastHeader,
    WeatherForecastBody
  },
  name: 'WeatherForecast',
  props: {
    tile: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      data$: undefined as Observable<Forecast> | undefined,
      cityForecast: undefined as CityForecast | undefined,
      weatherService: new WeatherForecastApi()
    }
  },
  methods: {
    onSubmit(cityForecast: CityForecast) {
      if (cityForecast.city && cityForecast.forecastType) {
        this.cityForecast = cityForecast;
        this.data$ = this.weatherService.getWeatherForCity(cityForecast);
        this.$router.push({
          name: 'weather-forecast',
          params: {city: cityForecast.city, forecastType: cityForecast.forecastType}
        });
      }
    }
  }
});
</script>

<style scoped lang="scss">

</style>
