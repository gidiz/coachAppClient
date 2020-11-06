<template>
  <div>
    <base-body>
      <div v-for="index in 5" :key="index" class="item">
        <div>שעה</div>
        <div>סוג אימון</div>
        <div>כמות מתאמנים</div>
        <div>רשימת מתאמנים</div>
      </div>
    </base-body>
  </div>
</template>

<script>
import BaseBody from "../components/ui/BaseBody.vue";
export default {
  components: {
    BaseBody,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
div.item {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  text-align: right;
}
div.item > div {
  margin-bottom: 10px;
}
</style>
