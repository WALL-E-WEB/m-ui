<template>
  <div class="w-nav">
      <!-- <div class="w-nav_title">事实上</div> -->
      <div class="w-nav_title">{{title}}</div>
      <div class="w-nav_group" 
      v-for="item in navgroup" 
      :key="item.name"
      @click="onNavTo(item.path)"
      >
        <span>{{item.name}}</span>
        <i class="iconfont icon-weibiaoti34"></i>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title:String,
        navgroup:[Object,Array]
    },
    methods:{
        onNavTo(path){
            this.$router.push(path)
        }
    }
}
</script>

<style lang="less">
.w-nav{
    padding: 10px;
    .w-nav_title{
        text-align: left;
        color: #969799;
        &:active{
            opacity: 0.8;
        }
    }
    
}
.w-nav_group{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 10px 10px 20px;
    border-radius: 50px;
    margin-top: 10px;
    background-color: #ebedf0;
}
</style>