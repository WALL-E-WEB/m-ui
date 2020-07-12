<template>
  <div class="w_list"
       ref="elelist"
       @touchstart="onTouchSt"
       @touchmove="onTouchMv"
       @touchend="onTouchEn"
       @scroll="listenerScroll">
       <div class="top" ref="top">{{topText}}</div>
    <main ref="itemwrap" class="w_list_main">
      <!-- <slot></slot> -->
      <div class="w_list_item" v-for="item in mockData" :key="item">
          {{item}}
      </div>
      <section v-if="showload">{{loadText}}</section>
    </main>
  </div>
</template>

<script>
export default {
  props: {
      topText:{
          type:String,
          default:'刷新'
      },
      loadText:{
          type:String,
          default:'加载中...'
      }
  },
  data() {
    return {
      listwrap: "",
      eleListTop: 0,
      eleListheight: 0,
      itemWrapheight: 0,
      mockData: 20,
        loadHeight:50,
      showload: false,
      startY:0,
      mv:'',
      showTop:false
    };
  },
  methods: {
    listenerScroll(e) {
        console.log(this.$refs.itemwrap.getBoundingClientRect());
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
          if(this.eleListTop > this.loadHeight) return ;
           
            let temp = e.targetTouches[0].pageY;
            this.mv =temp -  this.startY;
              console.log(this.mv);
            if(this.mv>0 && this.mv<this.loadHeight){
                this.showTop = true
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
    console.log(this.listwrap.getBoundingClientRect());
  }
};
</script>

<style lang="less" scoped>
.w_list {
   
  height: 100vh;
  overflow: auto;
  
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
      background-color: rgb(224, 224, 224);
    //   transform: translate(0,-40px);
  }
  .w_list_main{
      transition: all .6s  ;
      position: relative;
      z-index: 2;
      background-color: #fff;
  }
  .w_list_item {
    height: 40px;
    border-top: .5px solid rgb(240, 240, 240);
    line-height: 40px;
    
  }
}
</style>