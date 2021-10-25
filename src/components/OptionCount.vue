<template>
  <div>
    Option API <br />
    {{ count }}
    <button @click="increment">Add</button>
    {{ nextCount }}
  </div>
  <br />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OptionCount",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    nextCount() {
      return this.count + 1;
    },
  },
  methods: {
    increment() {
      this.count++;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
