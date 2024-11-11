<template>
  <div>
    <h2>Box {{ $route.params.id }}</h2>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  setup() {
    
  }
}
</script>

<style scoped>
h2 {
  color: blue;
}
</style>
