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
      <w-button class="curbtn" plain hairline bor text="普通按钮" />
      <w-button class="curbtn" plain text="主要按钮" type="primary" />
      <w-button class="curbtn" plain text="主要按钮" type="info" />
      <w-button class="curbtn" plain text="主要按钮" type="warning" />
      <w-button class="curbtn" plain text="主要按钮" type="danger" />
    </div>
  </div>
</template>

<script>
import WButton from "../../components/button/index";
export default {
  components: {
    WButton
  }
};
</script>

<style lang="less">
.button {
  text-align: left;
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
    }
  }
}
</style>