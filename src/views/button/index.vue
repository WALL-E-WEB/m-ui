<template>
  <div class="button">
    <div class="button_title">按钮type</div>
    <div class="button_row">
      <w-button class="curbtn"  text="普通按钮" />
      <w-button class="curbtn" text="主要按钮" type="primary" />
      <w-button class="curbtn" text="主要按钮" type="info" />
      <w-button class="curbtn" text="主要按钮" type="warning" />
      <w-button class="curbtn" text="主要按钮" type="danger" />
    </div>
    <div class="button_title">按钮plain</div>
    <div class="button_row">
      <w-button class="curbtn"  text="普通按钮" />
      <w-button class="curbtn" plain text="主要按钮" type="primary" />
      <w-button class="curbtn" plain text="主要按钮" type="info" />
      <w-button class="curbtn" plain text="主要按钮" type="warning" />
      <w-button class="curbtn" plain text="主要按钮" type="danger" />
    </div>
    <div class="button_title">按钮hairline</div>
    <div class="button_row">
      <w-button class="curbtn" plain hairline  text="细线按钮" />
      <w-button class="curbtn" plain hairline type="primary" text="细线按钮" />
      <w-button class="curbtn" @onBtn="onbtnEvent" disabled plain hairline type="primary" text="细线按钮" />
    </div>
    <div class="button_title">按钮禁用</div>
    <div class="button_row">
      <w-button class="curbtn" plain disabled hairline type="primary" text="按钮禁用" />
      <w-button class="curbtn" @onBtn="onbtnEvent" disabled   type="primary" text="细线按钮" />
    </div>
    <div class="button_title">按钮Loading</div>
    <div class="button_row">
      <w-button class="curbtn" plain  loading hairline type="primary" text="按钮禁用" />
      <w-button class="curbtn" @onBtn="onbtnEvent"   loading type="primary" text="细线按钮" />
    </div>
    <div class="button_title">按钮形状</div>
    <div class="button_row">
      <w-button class="curbtn" plain square  hairline type="primary" text="方形按钮" />
      <w-button class="curbtn" @onBtn="onbtnEvent" round   type="primary" text="圆形按钮" />
    </div>
    <div class="button_title">按钮大小</div>
    <div class="button_row">
      <w-button class="curbtn" plain   hairline size="large" type="primary" text="大按钮" />
      <w-button class="curbtn"    type="primary" text="大按钮" />
      <w-button class="curbtn"  size="small"  type="primary" text="大按钮" />
      <w-button class="curbtn"  size="mini"  type="primary" text="大按钮" />
    </div>
  </div>
  
</template>

<script>
import WButton from "../../components/button/index";
export default {
  components: {
    WButton
  },
  methods: {
      onbtnEvent(){
          console.log('sss')
      }
  },
};
</script>

<style lang="less">
.button {
  text-align: left;
  padding: 15px;
  .button_title{
      margin-top: 40px;
      color: rgba(69, 90, 100, 0.6);
  }
  .button_row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    align-content: space-between;
    margin:10px 0;
    .curbtn{
        margin-top: 10px;
        margin-right: 10px;
    }
  }
}
</style>