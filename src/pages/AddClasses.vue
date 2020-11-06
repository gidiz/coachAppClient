t<template>
  <base-body :background="true">
    <h1>הוספת אימון</h1>
  </base-body>
  <base-body>
    <form>
      <div>
        <div>תאריך האימון</div>
        <div><input v-model="date.model" type="date" /></div>
      </div>

      <div class="row hours">
        <div>
          <div>משעה</div>
          <div><input v-model="fromHour.model" type="number" /></div>
        </div>

        <div class="dash">-</div>
        <div>
          <div>עד שעה</div>
          <div><input v-model="toHour.model" type="number" /></div>
        </div>
      </div>
      <div>
        <div>סוג האימון</div>
        <div><input v-model="typeWod.model" type="text" /></div>
      </div>
    </form>
  </base-body>
</template>

<script>
import baseBody from "../components/ui/BaseBody.vue";
export default {
  components: {
    baseBody,
  },
  data() {
    return {
      date: {
        model: "",
        type: Date,
      },
      fromHour: {
        model: 0,
        type: Number,
      },
      toHour: {
        model: 0,
        type: Number,
      },
      typeWod: {
        model: "",
        type: Text,
      },
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
}
h1 {
  display: flex;
  justify-content: center;
  color: #a70000;
}
form {
  font-size: 22px;
}
form > div {
  margin-bottom: 20px;
}
.hours > div {
  margin-left: 20px;
}
.hours input {
  width: 60px;
}
.dash {
  padding-top: 10px;
  font-size: 50px;
}
</style>
