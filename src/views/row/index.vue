<template>
  <div class="row">
    <Row type="flex" gutter="10">
      <w-col class="col" span="6"> <div>2</div></w-col>
      <w-col class="col" span="6"> <div>2</div></w-col>
      <w-col class="col" span="6"> <div>2</div></w-col>
      <w-col class="col" span="6"> <div>2</div></w-col>
    </Row>
  </div>
</template>

<script>
import Row from '../../components/row';
import WCol from '../../components/col';

export default {
  components: {
    Row,
    WCol
  }
};
</script>

<style lang="less">
.col {
//   background-color: skyblue;
  > div {
    background-color: skyblue;
  }
}
</style>
