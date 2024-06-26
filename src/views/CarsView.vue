<template>
  <div class="card">
    <CardComp v-for="car in cars" :key="car.id" class="card-cars">
      <template v-slot:header>  
        <h3>{{ car.name }}</h3>
        <p>Make: {{ car.make }}</p>
        <p>Model: {{ car.model }}</p>
        <p>Year: {{ car.year }}</p>
        <p>Color: {{ car.color }}</p>
        <p>Price: {{ car.price}}</p>
      </template>
    </CardComp>
  </div>
</template>

<script>
import CardComp from '../components/CardComp.vue';

export default {
  computed: {
    cars() {
      return this.$store.state.cars;
    }
  },
  mounted() {
    this.$store.dispatch("getData");
  },
  components: {
    CardComp,
  }
}
</script>

<style>
  .card-cars{
    padding: 1rem;
    border-radius: 20px;
    width: calc(25% - 20px);
    height: 300px;
    margin: 10px;
    line-height: 2.5;
    vertical-align: top;
    border: 1px solid  brown;
  }
  .card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>