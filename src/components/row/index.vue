<template>
  <div class="w-row" :class="[RowClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    justify:String,
    align:String
  },
  computed: {
    RowClass() {
      let flex = this.type === "flex";
      // flex = flex && 'flex'
      // flex = `display:${flex}`

      return {
        'w-row--flex':flex,
        'w-row--justify':flex,
        'w-row--align':flex,
      };
    }
  }
};
</script>

<style lang="less">
.w-row {
  &.w-row{
      &--flex{
          display: flex;
      }
  }
}
</style>