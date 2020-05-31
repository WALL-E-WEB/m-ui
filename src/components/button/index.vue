<template>
  <div class="w-button" @click="onButton">
    <div class="w-button_content" :class="[type, typeClass]">
      <span> 
        <i v-if="loading" class="iconfont icon-Loading" ></i>
          {{text}}
        </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default",
      validator: function(value) {
        return (
          ["default", "primary", "info", "warning", "danger"].indexOf(value) !==
          -1
        );
      }
    },
    text: String,
    plain: Boolean,
    hairline: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    loading:{
        type:Boolean,
        default:false
    },
    square:Boolean,
    round:Boolean
  },
  methods: {
    onButton() {
      if (this.disabled) {
        return;
      }
      this.$emit("onBtn");
    }
  },
  computed: {
    typeClass() {
      //   return this.plain ? "plain" : "";
      return {
        plain: this.plain,
        hairline: this.hairline,
        disabled: this.disabled,
        square:this.square,
        round:this.round,
      };
    }
  }
};
</script>

<style lang='less'>
.w-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 44px;
  margin: 0;
  padding: 0;
  text-align: center;
  line-height: 1.2;
  -webkit-appearance: none;
  margin-right: 10px;
  .w-button_content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    border-radius: 2px;

    &.default {
      border: 1px solid #ebedf0;
    }
    &.primary {
      background-color: #07c160;
      color: #fff;
    }
    &.info {
      background-color: #1989fa;
      color: #fff;
    }
    &.warning {
      background-color: #ff976a;
      color: #fff;
    }
    &.danger {
      background-color: #ee0a24;
      color: #fff;
    }
    &.plain {
      background-color: #fff;
      color: #000;

      &.default {
        // border: 1px solid #ebedf0;
        color: #ebedf0;
        &.hairline {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            box-sizing: border-box;
            right: -50%;
            bottom: -50%;
            left: -50%;
            top: -50%;
            border: 1px solid red;
            transform: scale(0.5);
          }
        }
      }
      &.primary {
        border: 1px solid #07c160;
        color: #07c160;
        &.hairline {
          position: relative;
          border: none;
          &::after {
            content: "";
            position: absolute;
            box-sizing: border-box;
            right: -50%;
            bottom: -50%;
            left: -50%;
            top: -50%;
            border: 1px solid #07c160;
            transform: scale(0.5);
          }
        }
      }
      &.info {
        border: 1px solid #1989fa;
        color: #1989fa;
      }
      &.warning {
        border: 1px solid #ff976a;
        color: #ff976a;
      }
      &.danger {
        border: 1px solid #ee0a24;
        color: #ee0a24;
      }
    }
    // 
    &:active {
      opacity: 0.8;
    }
    &.disabled{
        opacity: 0.4;
    }
    &.square{
        border-radius: 0;
    }
    &.round{
        border-radius: 44px;
    }
  }
}
</style>