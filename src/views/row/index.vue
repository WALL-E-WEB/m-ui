<template>
  <div class="row">
    <div class="row_title">gutter=10</div>
    <Row class="row_item" gutter="10">
      <w-col class="col" span="6"> <div>span=6</div></w-col>
      <w-col class="col" span="6"> <div>span=6</div></w-col>
      <w-col class="col" span="6"> <div>span=6</div></w-col>
      <w-col class="col" span="6"> <div>span=6</div></w-col>
    </Row>
    <div class="row_title">flex</div>
    <Row class="row_item" type="flex">
      <w-col class="col" span="6"> <div>span=6</div></w-col>
      <w-col class="col" span="6"> <div>span=6</div></w-col>
      <w-col class="col" span="6"> <div>span=6</div></w-col>
      <w-col class="col" span="6"> <div>span=6</div></w-col>
    </Row>
    <Row class="row_item" type="flex" justify="start" style="marginTop:10px">
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
    </Row>
    <Row class="row_item" type="flex" justify="end" style="marginTop:10px">
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
    </Row>
    <Row class="row_item" type="flex" justify="between" style="marginTop:10px">
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
    </Row>
    <Row class="row_item" type="flex" justify="around" style="marginTop:10px">
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
      <w-col class="col" span="4"> <div>span=4</div></w-col>
    </Row>
    <div class="row_title">offset-2</div>
    <Row class="row_item">
      <w-col class="col" span="6"> <div>span=6</div></w-col>
      <w-col class="col" span="6" offset="2"> <div>offset=2</div></w-col>
      <w-col class="col" span="6" offset="1"> <div>offset=1</div></w-col>
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
.row_title {
  text-align: left;
  padding: 15px 15px 8px 15px;
  margin-top: 20px;
  color: rgba(69, 90, 100, 0.6);
}
.col {
  //   background-color: skyblue;
  > div {
    background-color: #66c6f2;
    line-height: 30px;
  }
}
.row {
  color: #fff;
  padding: 15px;
  .row_item {
    .col {
      &:nth-child(2n) {
        > div {
          background-color: #39a9ed;
        }
      }
    }
  }
}
</style>
