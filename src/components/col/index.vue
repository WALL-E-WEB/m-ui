<template>
  <div class="w-col" :class="spanClass" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      keyindex: 0
    };
  },
  mounted() {},
  computed: {
    style() {
      let index = this.$parent.$children.indexOf(this);

      let space = this.$parent.spaces();

      if (space && space[index]) {
        let { left, right } = space[index];
        return {
          paddingLeft: left ? left + 'px' : null,
          paddingRight: right ? right + 'px' : null
        };
      }
    },
    spanClass() {
      let span = Number(this.span);
      let offset = Number(this.offset);
      return [`w-col-span-${span}`, `w-col-offset-${offset}`];
    }
  }
};
</script>

<style lang="less">
.w-col {
  float: left;
  box-sizing: border-box;
  // width: 100%;
}
.w-col2(24); //执行
.w-col2(@n, @i: 1) when (@i =< @n) {
  //声明 if
  &.w-col-span-@{i} {
    width: @i / 24 * 100%;
  }
  &.w-col-offset-@{i} {
    margin-left: @i / 24 * 100%;
  }
  .w-col2(@n, (@i + 1)); //执行 递归
}
</style>
