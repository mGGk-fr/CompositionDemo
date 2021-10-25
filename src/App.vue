<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <OptionCount />
  <CompositionCount />
  <ComposableCount />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionCount from "@/components/OptionCount.vue";
import CompositionCount from "@/components/CompositionCount.vue";
import ComposableCount from "@/components/ComposableCount.vue";

export default defineComponent({
  name: "App",
  components: {
    ComposableCount,
    CompositionCount,
    OptionCount,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
