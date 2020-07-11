<template>
  <div class="w-popup">
    <div class="w-shade">ss</div>
    <div class="">
      啦啦
      <slot></slot>
    </div>
    <div @click="btn">{{ show }}圣诞节咖啡机</div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'mEventChange'
  },
  props: {
    show: Boolean,
    overlay: Boolean,
    position: {
      type: String,
      default: 'top',
      validator: function(val) {
        return ['top', 'left', 'bottom', 'right'].indexOf(val) > -1;
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    btn() {
      console.log('child');
      this.$emit('mEventChange', !this.show);
    }
  },
  watch: {
    show(val) {
      this.$emit('watch mEventChange', val);
    }
  }
};
</script>

<style></style>
