<template>
  <div class="formComp">
    <h1 class="formMsg">{{ msg }}</h1>
    <form class="formBase">
      <label class="formLabel" id="fNameLab" for="fName">First Name</label>
      <input type="name" class="formInput" id="fName" name="fName" />

      <label class="formLabel" id="lNameLab" for="lName">Last Name</label>
      <input type="name" class="formInput" id="lName" name="lName" />

      <label class="formLabel" id="emailLab" for="email">Email</label>
      <input type="email" class="formInput" id="email" name="email" />

      <label class="formLabel" id="pNumLab" for="pNum">Phone Number</label>
      <input type="text" class="formInput" id="pNum" name="pNum" />

      <label class="formLabel" id="compLab" for="company">Company</label>
      <input type="text" class="formInput" id="company" name="company" />

      <input type="submit" id="formBtn" value="Continue" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormComp",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.formComp {
  background-color: #f4f2ee;
}
.formMsg {
  position: absolute;
  color: #555552;
  top: 208px;
  left: 36px;
  font-family: "Roboto";
  font-weight: 400;
  font-style: normal;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0%;
  width: 310px;
  height: 29px;
}
.formLabel {
  color: #006315;
  position: absolute;
  z-index: 1;
  background-color: #f4f2ee;
}
#fNameLab {
  top: 255.04px;
  left: 48.83px;
  padding-top: 1.26px;
  padding-right: 6.32px;
  padding-left: 6.32px;
  gap: 6.32px;
}
#lNameLab {
  width: 74.1312026977539px;
  height: 17.26919937133789px;
  top: 326.32px;
  left: 48.83px;
  padding-top: 1.26px;
  padding-right: 6.32px;
  padding-left: 6.32px;
  gap: 6.32px;
}
#emailLab {
  width: 44.64719772338867px;
  height: 17.26919937133789px;
  top: 397.6px;
  left: 48.83px;
  padding-top: 1.26px;
  padding-right: 6.32px;
  padding-left: 6.32px;
  gap: 6.32px;
}
#pNumLab {
  width: 97.71839904785156px;
  height: 17.26919937133789px;
  top: 468.88px;
  left: 48.83px;
  padding-top: 1.26px;
  padding-right: 6.32px;
  padding-left: 6.32px;
  gap: 6.32px;
}
#compLab {
  width: 66.54959869384766px;
  height: 17.26919937133789px;
  top: 540.16px;
  left: 48.83px;
  padding-top: 1.26px;
  padding-right: 6.32px;
  padding-left: 6.32px;
  gap: 6.32px;
}
.formInput {
  position: absolute;
  border: 0.72px solid #555552;
  border-radius: 3.6px;
  width: 310px;
  height: 40.31999969482422px;
  z-index: 0;
  background-color: #f4f2ee;
  padding-left: 20.1px;
  color: #555552;
  font-family: "ABeeZee";
  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
}
#fName {
  top: 262.95px;
  left: 35.76px;
}
#lName {
  top: 334.23px;
  left: 35.76px;
}
#email {
  top: 405.51px;
  left: 35.76px;
}
#pNum {
  top: 476.79px;
  left: 35.76px;
}
#company {
  top: 548.07px;
  left: 35.76px;
}
#formBtn {
  position: absolute;
  width: 131px;
  height: 34.82982635498047px;
  top: 640px;
  left: 215px;
  padding-top: 10.22px;
  padding-right: 37.5px;
  padding-bottom: 8.61px;
  padding-left: 37.5px;
  gap: 5.38px;
  border: none;
  border-radius: 4px;
  background-color: #0b476c;
  color: #ffffff;
  font-family: "ABeeZee";
  font-weight: 400;
  font-style: normal;
  font-size: 13.45px;
  line-height: 16px;
  letter-spacing: 0%;
}
</style>
