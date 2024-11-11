import { defineStore } from 'pinia'

export const useBoxStore = defineStore('counter', {
  state: () => {
    return {
      boxes: 0,
    }
  },
  actions: {
    increment() {
      this.boxes++
    },
    decrement() {
      if(this.boxes>0)  this.boxes--
    }
  },
})