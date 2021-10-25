<template>
  <div>
    Composition API <br />
    {{ count }}
    <button @click="increment">Add</button>
    {{ nextCount }}
  </div>
  <br />
</template>

<script setup>
import { computed, ref } from "vue";

let count = ref(0);

const nextCount = computed(() => count.value + 1);

const increment = () => {
  count.value++;
};
</script>

<style scoped></style>
