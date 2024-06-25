<template>
    <div :class="['card', genderClass]">
      <slot name="header"></slot>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      gender: {
        type: String,
        required: true
      }
    },
    computed: {
      genderClass() {
        return this.gender === 'male' ? 'gold-border' : 'green-border';
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    border: 1px solid;
    padding: 16px;
    margin: 16px;
    width: 300px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }
  .gold-border {
    border-color: gold;
  }
  .green-border {
    border-color: green;
  }
  </style>