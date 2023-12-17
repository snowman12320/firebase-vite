<template>
  <div class="m-8 flex gap-8">
    <AppNumbersOptions />
    <AppNumbersComposition />
  </div>
</template>

<script>
import AppNumbersOptions from './components/AppNumbersOptions.vue';
import AppNumbersComposition from './components/AppNumbersComposition.vue';

export default {
  components: {
    AppNumbersOptions,
    AppNumbersComposition,
  },
};
</script>
