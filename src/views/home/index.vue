<template>
  <div class="w-home">
    <w-nav title="基础组件" :navgroup="navList" />
  </div>
</template>

<script>
import WNav from '../../components/nav/nav.vue';
export default {
  components: {
    WNav
  },
  data() {
    return {
      navList: [
        { name: 'button', path: '/button' },
        { name: 'row', path: '/row' },
        { name: 'popup', path: '/popup' },
        { name: 'list', path: '/list' }
      ]
    };
  }
};
</script>

<style></style>
