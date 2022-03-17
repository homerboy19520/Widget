<template>
  <p
    class="paragraph"
    :class="[`m-${this.size} m-${this.weight} m-${this.color}`]"
  >
    <slot></slot>
  </p>
</template>
<script>
export default {
  name: "ParagraphApp",
  props: {
    size: {
      type: String,
      default: "14",
    },
    weight: {
      type: String,
      default: "regular",
    },
    color: {
      type: String,
      default: "black",
    },
  },
  computed: {
    classes() {
      return [
        "paragraph",
        `m-${this.size}`,
        `m-${this.weight}`,
        `m-${this.color}`,
      ];
    },
  },
};
</script>

<style lang="scss">
.paragraph {
  font-family: var(--font-inter);

  &.m-24 {
    font-size: 24px;
    line-height: 28px;
  }

  &.m-12 {
    font-size: 12px;
    line-height: 16px;
  }

  &.m-regular {
    font-weight: 400;
  }

  &.m-medium {
    font-weight: 500;
  }
  &.m-grey {
    color: var(--color-grey);
  }

  &.m-str-grey {
    color: var(--color-strong-grey);
  }

  &.m-black {
    color: var(--color-black);
  }
}
</style>
