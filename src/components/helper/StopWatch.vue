<script setup>
import { onBeforeUnmount, ref } from "vue";

const tens = ref(0);
const seconds = ref(0);

const tensElement = ref(null);
const secondsElement = ref(null);
const startTimer = () => {
  tens.value++;

  if (tens.value <= 9) {
    tensElement.value = "0" + tens.value;
  }

  if (tens.value > 9) {
    tensElement.value = tens.value;
  }

  if (tens.value > 99) {
    seconds.value++;
    secondsElement.value = "0" + seconds.value;
    tens.value = 0;
    tensElement.value = "0" + 0;
  }

  if (seconds.value > 9) {
    secondsElement.value = seconds.value;
  }
};
const interval = ref(
  setInterval(() => {
    startTimer();
  }, 10)
);

onBeforeUnmount(() => {
  clearInterval(interval.value);
  console.log("interval closed");
});
</script>

<template>
  <div class="stopwatch-container">
    <span class="seconds" v-if="secondsElement">{{ secondsElement }}</span>
    <span class="seconds" v-else>00</span>
    <span>:</span>
    <span class="tens">{{ tensElement }}</span>
  </div>
</template>

<style scoped>
.stopwatch-container {
  z-index: 100;
}
</style>
