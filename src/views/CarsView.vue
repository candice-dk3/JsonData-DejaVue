<template>
    <div>
      <CardComp v-for="car in cars" :key="car.id">
        <template #header>
          <h3>{{ car.name }}</h3>
        </template>
        <p>Make: {{ car.make }}</p>
        <p>Model: {{ car.model }}</p>
        <p>Year: {{ car.year }}</p>
        <p>Color: {{ car.color }}</p>
        <p>Price: {{ car.price}}</p>
      </CardComp>
    </div>
  </template>
  
  <script>
  import CardComp from '../components/CardComp.vue';
  
  export default {
    components: { CardComp },
    data() {
      return {
        
      }
    }
  }
  </script>
<style>

</style>