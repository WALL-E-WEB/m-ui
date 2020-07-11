<template>
  <div>
      <List>
          
          <div class="listitem" v-for="item in 40" :key="item">
              {{item}}
          </div>
      </List>
  </div>
</template>

<script>
import List from '../../components/list/index'
export default {
    components:{
        List
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>
.listitem{
    height: 40px;
    border: 1px solid #ccc;
}
</style>