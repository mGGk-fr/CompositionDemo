import { computed, ref } from "vue";

export default function (): unknown {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  const nextCount = computed(() => count.value + 1);

  return { count, increment, nextCount };
}
