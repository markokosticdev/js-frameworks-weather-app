<template>
  <div class="container-fluid d-flex justify-content-center mt-4">
    <h1>{{ title }}</h1>
  </div>
  <div class="container mt-3">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  data: () => {
    return {
      title: 'Weather Forecast (Vue)'
    }
  },
});
</script>

<style lang="scss">

</style>
