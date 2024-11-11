<template>
  <div>
    <button @click="increment">加号按钮</button>
    <button @click="decrement">减号按钮</button>
    <span>{{ boxes }}</span>
    
    <div v-for="n in boxes" :key="n">
      <router-link :to="`/box/${n}`">Box {{ n }}</router-link>
    </div>
  </div>
</template>

<script>
import { useBoxStore } from '../stores'

export default {
  setup() {
    const boxStore = useBoxStore();
    return {
      boxes: boxStore.boxes,
      increment: boxStore.increment,
      decrement: boxStore.decrement
    };
  }
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
