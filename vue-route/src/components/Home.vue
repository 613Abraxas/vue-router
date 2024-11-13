<template>
  <div class='container'>
    <div class="btn">
      <button @click="increment">加号按钮</button>
      <button @click="decrement">减号按钮</button>
    </div>
    
    <div class='box'>
      <div class='item' v-for="n in boxes" :key="n">
        <router-link :to="`/box/${n}`">Box {{ n }}跳转</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useBoxStore } from '@/stores/index.js'
import { computed } from 'vue';

export default {
  setup() {
    const boxStore = useBoxStore();
    const boxes = computed(() => boxStore.boxes);
    return {
      // boxes: boxStore.boxes,
      boxes,
      increment: boxStore.increment,
      decrement: boxStore.decrement
    };
  }
}
</script>

<style scoped lang='scss'>
.container {

  .btn{
    // margin-right: 10px;
    // background-color: red;
    margin-bottom:20px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
      margin-left: 20px;
      background-color: rgba(74, 74, 224, 0.952);
      width: 100px;
      height: 60px;
      border: 1px soild rgb(78, 78, 235);
      border-radius: 5px;
    
    }
  }

  .box{
    display: flex;
    flex-wrap: wrap; 
    gap: 10px; 
    border: 1px solid rgb(58, 238, 58);


    .item {
      margin: 10px 0;
      padding: 10px;
      background-color: rgb(123, 238, 123);
      text-align: center;
      // min-width: 100px; 
      border-radius: 5px;
    }
  }
}


</style>

