<template>
  <div class="card-body">
    <form class="row" @submit="onSubmit()">
      <div class="col-12 col-md-12 col-lg-6">
        <label for="city" class="font-weight-bold visually-hidden">City</label>
        <input id="city" type="text" class="form-control" v-model="formGroup.city"/>
      </div>
      <div class="col-12 col-md-8 col-lg-3 mt-3 mt-md-0">
        <label for="forecastType" class="font-weight-bold visually-hidden">Forecast Type</label>
        <select id="forecastType" class="form-control" v-model="formGroup.forecastType">
          <option v-for="forecastType in forecastTypes" :value="forecastType" :key="forecastType">
            {{ forecastType | titlecase }}
          </option>
        </select>
      </div>
      <div class="col-12 col-md-4 col-lg-3">
        <label class="font-weight-bold visually-hidden">&nbsp;</label>
        <button type="submit" class="btn btn-primary btn-block font-weight-bold">Get Forecast</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {ForecastType} from "@js-frameworks-weather-app/weather-types";

export default defineComponent({
  name: 'WeatherForecastHeader',
  emits: [
    'onSubmit'
  ],
  data() {
    return {
      defaultCity: 'Limassol',
      forecastTypes: [ForecastType.Hourly, ForecastType.Daily],
      formGroup: {
        city: '',
        forecastType: ForecastType.Hourly
      }
    }
  },
  created() {
    this.formGroup.city = (this.$route.params['city'] ?? this.defaultCity) as string
    this.formGroup.forecastType = (this.$route.params['forecastType'] ?? this.forecastTypes[0]) as ForecastType

    this.onSubmit();
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', {
        city: this.formGroup.city,
        forecastType: this.formGroup.forecastType,
      });
    }
  }
});
</script>

<style scoped lang="scss">

</style>
