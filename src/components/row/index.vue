<template>
  <div class="w-row" :class="RowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    justify: {
      type: String,
      default: 'center'
    },
    align: {
      type: String,
      default: 'center'
    },
    gutter: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      spacesObj: ''
    };
  },
  methods: {
    spaces() {
      const gutter = Number(this.gutter);

      if (!gutter) {
        return;
      }

      const spaces = [];
      const groups = [[]];

      let total = 0;

      this.$children.forEach((item, index) => {
        total += Number(item.$attrs.span);

        if (total > 24) {
          groups.push([index]);
          total -= 24;
        } else {
          groups[groups.length - 1].push(index);
        }
      });

      groups.forEach((group) => {
        const averagePadding = (gutter * (group.length - 1)) / group.length;

        group.forEach((item, index) => {
          if (index === 0) {
            spaces.push({ right: averagePadding });
          } else {
            const left = gutter - spaces[item - 1].right;
            const right = averagePadding - left;
            spaces.push({ left, right });
          }
        });
      });
      console.log('spaces', spaces);

      return spaces;
    }
  },
  computed: {
    RowClass() {
      let flex = this.type === 'flex';
      console.log('row RowClass');

      return [
        {
          'w-row--flex': flex,
          [`justify-${this.justify}`]: flex && this.justify,
          [`align-${this.align}`]: flex && this.align
        }
      ];
    }
  },
  mounted() {
    this.spacesObj = this.spaces();
  }
};
</script>

<style lang="less">
.w-row {
  &.w-row {
    &--flex {
      display: flex;
    }
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-start {
    justify-content: flex-start;
  }
  &.justify-end {
    justify-content: flex-end;
  }
  &.justify-between {
    justify-content: space-between;
  }
  &.justify-around {
    justify-content: space-around;
  }
  &.align-center {
    align-items: center;
  }
  &.align-start {
    align-items: flex-start;
  }
  &.align-end {
    align-items: flex-end;
  }
}
</style>
