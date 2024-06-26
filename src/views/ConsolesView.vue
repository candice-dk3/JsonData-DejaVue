<template>
    <div class="gc">
      <CardComp v-for="gaming_consoles in gaming_consoles" :key="gaming_consoles.id" class="console">
        <template #header>
          <h3>{{ gaming_consoles.name }}</h3>
        </template>
        <p>Manufacturer: {{ gaming_consoles.manufacturer }}</p>
        <p>Release Date: {{ gaming_consoles.releaseDate }}</p>
        <p>Storage: {{ gaming_consoles.storage }}</p>
        <p>Price: {{ gaming_consoles.price }}</p>
        <p>Best Selling Game : {{ gaming_consoles.best_selling_game }}</p>
      </CardComp>
    </div>
  </template>
  
  <script>
  import CardComp from '../components/CardComp.vue';
  
  export default {
    components: { CardComp },
    data() {
      return {
        gaming_consoles: [
        {
            "name": "PlayStation 5",
            "manufacturer": "Sony",
            "release_year": 2020,
            "storage": "825GB SSD",
            "price": 499,
            "best_selling_game": "Spider-Man: Miles Morales"
        },
        {
            "name": "Xbox Series X",
            "manufacturer": "Microsoft",
            "release_year": 2020,
            "storage": "1TB SSD",
            "price": 499,
            "best_selling_game": "Halo Infinite"
        },
        {
            "name": "Nintendo Switch",
            "manufacturer": "Nintendo",
            "release_year": 2017,
            "storage": "32GB",
            "price": 299,
            "best_selling_game": "Mario Kart 8 Deluxe"
        },
        {
            "name": "Steam Deck",
            "manufacturer": "Valve",
            "release_year": 2022,
            "storage": "64GB eMMC",
            "price": 399,
            "best_selling_game": "Elden Ring"
        },
        {
            "name": "PlayStation 4 Pro",
            "manufacturer": "Sony",
            "release_year": 2016,
            "storage": "1TB HDD",
            "price": 399,
            "best_selling_game": "God of War (2018)"
        }
        ]
      }
    }
}
  </script>

<style scoped> 
    
    .console{
    display: grid;
    border-radius: 30px;
    width: 300px;
    height: 480px;
    margin: 10px;
    margin-left: 50px;
    margin-right: 50px;
    line-height: 2.5;
    vertical-align: top;
    border: 4px solid  pink;
    background-color: burlywood;
    }
    .gc{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    }
</style>