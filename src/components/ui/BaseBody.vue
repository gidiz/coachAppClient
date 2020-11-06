<template>
  <div class="card" :class="{ header: background }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["background"],
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
.header {
  background: linear-gradient(to left, rgb(67, 206, 162), rgb(24, 90, 157));
}
</style>
