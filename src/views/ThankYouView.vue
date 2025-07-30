<template>
  <div>
    <img id="logo" alt="Green Tech Logo" src="../assets/greentech 1.png" />
    <div class="messageContainer">
      <h3 id="topMsg">Thank You</h3>
      <h3 id="bottomMsg">We will contact you shortly</h3>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      setTimeout(() => {
        router.push("/home");
      }, 5000);
    });
  },
};
</script>

<style>
#logo {
  position: absolute;
  width: 122.82685852050781px;
  height: 40px;
  top: 30px;
  left: 35px;
}
.messageContainer {
  position: absolute;
  width: 227px;
  height: 116px;
  top: 366px;
  left: 83px;
  text-align: center;
}
h3 {
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #555552;
  font-family: "Roboto";
}
</style>
