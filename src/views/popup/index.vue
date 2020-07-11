<template>
  <div class="popup">
    <Popup v-model="show"></Popup>
    <div @click="btn">{{ show }}</div>
    <br>
    <div @click="btn2">
      qingqiu
    </div>
  </div>
</template>

<script>
import Popup from "../../components/popup";
import { postLogin } from "../../http/index";
export default {
  components: {
    Popup
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    btn() {
      //   console.log('aaa');
      //   this.show = !this.show;
    },
    btn2(e) {
      //   console.log('mEventChange', e);
      postLogin({
        name: [2, 2, 2, 3, 6, 9],
        password: 123456
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style></style>
