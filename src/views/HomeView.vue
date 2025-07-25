<template>
  <div class="home">
    <img id="logo" alt="Green Tech Logo" src="../assets/greentech 1.png" />
    <FormComp msg="Have us reach out" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComp from "@/components/FormComp.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    FormComp,
  },
});
</script>

<style scoped lang="scss">
.home {
  background-color: #f4f2ee;
}
#logo {
  position: relative;
  width: 122.82685852050781;
  height: 40;
  opacity: 1;
  top: 30px;
  left: 35px;
}
</style>
