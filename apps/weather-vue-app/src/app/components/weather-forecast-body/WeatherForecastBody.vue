<template>
  <div class="card">
    <template v-if="data">
      <div class="card-header bg-white" v-if="data.value && cityForecast">
        <h4 class="mt-2">
          {{ cityForecast.city | titlecase }} {{ cityForecast.forecastType | titlecase }} Forecast
          <template v-if="cityForecast.forecastType === 'hourly'">for {{ today | formatDate }}</template>
        </h4>
      </div>

      <div class="card-body">
        <div class="row my-n3">
          <template v-if="data.value && cityForecast">
            <template v-if="data.value | filterForecast(cityForecast.forecastType) as filterdData">
              <template v-if="filterdData.hourly">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2" v-for="hour in filterdData.hourly">
                  <weather-forecast-tile :tile="createForecastTile(hour, cityForecast.forecastType)"/>
                </div>
              </template>
              <template v-if="filterdData.daily">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2" v-for="day in filterdData.daily">
                  <weather-forecast-tile :tile="createForecastTile(day, cityForecast.forecastType)"/>
                </div>
              </template>
            </template>
          </template>
          <template v-if="!data.loading && !data.value">
            <div class="col">
              <h4 class=" text-center">
                Not Found
              </h4>
            </div>
          </template>
          <template v-if="data.error">
            <div class="col">
              <h4 class=" text-center">
                Error
              </h4>
            </div>
          </template>
          <template v-if="data.loading && !data.error">
            <div class="col">
              <h4 class=" text-center">
                Loading...
              </h4>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {AsyncWrapper, Forecast} from "@js-frameworks-weather-app/weather-types";
import WeatherForecastTile from "../weather-forecast-tile/WeatherForecastTile.vue";

export default defineComponent({
  components: {
    WeatherForecastTile
  },
  name: 'WeatherForecastBody',
  props: {
    data$: {
      required: true
    },
    cityForecast: {
      required: true
    }
  },
  data: () => {
    return {
      today: new Date(),
      data: {} as AsyncWrapper<Forecast>
    }
  },
});
</script>

<style scoped lang="scss">

</style>
