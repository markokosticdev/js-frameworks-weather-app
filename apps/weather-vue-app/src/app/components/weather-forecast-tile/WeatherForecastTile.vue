<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h4 class="col-12 text-center">{{ tile.realTemp | roundNumber }} °C</h4>
        <h5 class="col-12 text-center">Feels like</h5>
        <h4 class="col-12 text-center">{{ tile.feelsTemp | roundNumber }} °C</h4>
      </div>
      <div class="row">
        <img class="col-12 my-n5 img-fluid text-center" :src="tile.weatherIcon"/>
        <h5 class="col-12 mt-1 text-center">{{ tile.weatherTitle | titlecase }}</h5>
        <div class="col-12 text-center">{{ tile.weatherDescription | titlecase }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'WeatherForecastTile',
  props: {
    tile: {
      required: true
    }
  },
});
</script>

<style scoped lang="scss">

</style>
