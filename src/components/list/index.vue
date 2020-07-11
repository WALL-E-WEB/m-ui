<template>
  <div class="w_list"
       ref="elelist"
       @touchstart="onTouchSt"
       @touchmove="onTouchMv"
       @touchend="onTouchEn"
       @scroll="listenerScroll">
       <div class="top" ref="top">刷新</div>
    <main ref="itemwrap" class="w_list_main">
      <!-- <section class="w_list_top" v-if="true">top</section> -->
      <!-- <slot></slot> -->
      <div class="w_list_item"
      @click="btn"
           v-for="(item, index) in mockData"
           :key="index">
        {{item}}
      </div>
      <section v-if="showload">加载中...</section>
    </main>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      listwrap: "",
      eleListTop: 0,
      eleListheight: 0,
      itemWrapheight: 0,
      mockData: 20,
      index: 1,
      showload: false,
      startY:0,
      mv:'',
      showTop:false
    };
  },
  methods: {
    listenerScroll(e) {
      if (this.showload) return;
      this.eleListTop = this.listwrap.scrollTop;
      this.itemWrapheight = this.$refs.itemwrap.scrollHeight;
      this.showload = false;
      if (this.eleListheight + this.eleListTop + 100 > this.itemWrapheight) {
        this.showload = true;
        setTimeout(() => {
          this.mockData += 10;
          this.showload = false;
        }, 500);
      };


    },
    btn(){
        console.log(2222);
        // this.listenerScroll = null
        // this.$refs.elelist.style.transform = `translate(0,${})`
    },
    onTouchMv(e){
          if(this.eleListTop > 50) return ;
           
            let temp = e.targetTouches[0].pageY;
            this.mv =temp -  this.startY;
              console.log(this.mv);
            if(this.mv>0 && this.mv<50){
                this.showTop = true
                //  this.$refs.elelist.scrollTop = -this.mv;
                this.$refs.itemwrap.style.transform = `translate(0,${this.mv}px)`;
                this.$refs.top.style.transform = `translate(0,${this.mv-50}px)`;
            }
    },
    onTouchSt(e){
        this.startY = e.targetTouches[0].pageY
    },
    onTouchEn(e){
         this.showTop = false
        this.$refs.itemwrap.style.transform = `translate(0,0)`
    }
  },
  mounted() {
    this.listwrap = this.$refs.elelist;
    this.eleListTop = this.listwrap.scrollTop;
    this.eleListheight = this.listwrap.offsetHeight;

    this.itemWrapheight = this.$refs.itemwrap.scrollHeight;

    console.log("eleListheight", this.eleListheight);
    console.log("itemWrapheight", this.itemWrapheight);
  }
};
</script>

<style lang="less" scoped>
.w_list {
   
  height: 100vh;
  overflow: auto;
  transition: all .6s  ;
  .top{
      width: 100%;
      position: absolute;
      transform: translate(0,-50px);
      z-index: 1;
      text-align: center;
      line-height: 40px;
  }
  .w_list_top{
      height: 40px;
      background-color: red;
    //   transform: translate(0,-40px);
  }
  .w_list_main{
      position: relative;
      z-index: 2;
      background-color: #fff;
  }
  .w_list_item {
    height: 40px;
    border: 1px solid #ccc;
    
  }
}
</style>