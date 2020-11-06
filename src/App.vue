<template>
  <the-header></the-header>
  <router-view />
</template>

<script>
import TheHeader from "../src/components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
body {
  direction: rtl;
  font-family: "Assistant sans-serif";
  font-size: 18px;
  font-weight: 400;
}

input {
  outline: none;
  border: none;
  border-radius: 30px;
  border: 1px solid #21471d;
  padding: 10px;
  width: 150px;
}
</style>
