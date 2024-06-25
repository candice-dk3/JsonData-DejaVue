<template>
    <div>
      <div v-if="loading" class="spinner">Loading...</div>
      <div v-else>
        <CardComp
          v-for="friend in friends" :key="friend.id" :gender="friend.gender" >
          <template #header>
            <h3>{{ friend.firstName }}</h3>
          </template>
          <p>Phone: {{ friend.contactDetails }}</p>
          <p>Email: {{ friend.email }}</p>
        </CardComp>
      </div>
    </div>
  </template>
  
  <script>
  import CardComp from '@/components/CardComp.vue';
  
  export default {
    components: { CardComp },
    data() {
      return {
        loading: true,
        "friends":[
        {
            "id":"1",
            "firstName":"",
            "lastName":"",
            "gender":"",
            "profile":"",
            "contactDetails":""
        }
    ]
      }
    },
    mounted() {
      setTimeout(() => {
        this.friends = [
          { id: 1, name: 'Nikilitha Kakaza', contactDetails: '082 402 1820', email: 'kakazanikilitha544@gmail.com', gender: 'female' },
          { id: 2, name: 'Jane Do', contactDetails: '', email: '@gmail.com', gender: 'female' }
        ];
        this.loading = false;
      }, 2000);
    }
  }
  </script>
  
  <style scoped>
  .spinner {
    text-align: center;
  }
  </style>