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
  data(){
      return {
          keyindex:0
      }
  },
  mounted() {
    // console.log(this.$parent.spaces);
    // let { index } = this;
    // console.log(this);
    // console.log('parent',this.$parent);
    // console.log('children',this.$parent.$children);
    // this.keyindex = this.$parent.$children.indexOf(this);
    //  const children = [...this.$parent.$children, this];
    //  console.log('children',children)
  },
  computed: {
    style() {
      let index = this.$parent.$children.indexOf(this);
    
    //   let index = this.keyindex
        console.log('index',index);
      let space = this.$parent.spaces2();
      console.log('childre space',space);
      
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
