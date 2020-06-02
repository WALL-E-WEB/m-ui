<template>
  <div class="w-col" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  computed: {
    padding() {
      this.$parent;
    }
  },
  mounted() {
    console.log(this.$parent.spaces);
    // let { index } = this;
    // console.log(this);
    console.log(this.$parent.$children.indexOf(this));
  },
  computed: {
    style() {
      let index = this.$parent.$children.indexOf(this);
      let space = this.$parent.spaces;
      if (space && space[index]) {
        let { left, right } = space[index];
        return {
          paddingLeft: left ? left + 'px' : null,
          paddingRight: right ? right + 'px' : null
        };
      }
    }
  }
};
</script>

<style lang="less">
.w-col {
  box-sizing: border-box;
  width: 100%;
}
</style>
