import { defineStore } from 'pinia'

export const useBoxStore = defineStore('counter', {
  state: () => {
    return {
      boxes: 1,
    }
  },
  actions: {
    increment() {
      this.boxes++
      console.log('Incremented, new value:', this.boxes);
    },
    decrement() {
      if(this.boxes>0)  this.boxes--
    }
  },
})