<template>
  <div>
    Composition API with Composable <br />
    {{ count }}
    <button @click="increment">Add</button>
    {{ nextCount }}
  </div>
  <br />
</template>

<script setup>
import useCounter from "../composables/useCounter";

const { count, increment, nextCount } = useCounter();
</script>

<style scoped></style>
