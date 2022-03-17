<template>
  <button
    :disabled="isDisabled"
    class="button"
    :class="[`m-${modifier}`]"
    @click="onButton"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonApp",

  data() {
    return {};
  },

  props: {
    modifier: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onButton() {
      this.$emit("onbutton");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;

  &.m-text {
    font-family: var(--font-inter);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #4f4f4f;
    transition: opacity 0.2s ease-out;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    margin-top: 10px;

    &:hover {
      opacity: 0.6;
    }
  }

  &.m-primary {
    width: fit-content;
    padding: 6px 36px;
    border-radius: 3px;
    background-color: #e0e0e0;
    border: 1px solid transparent;
    font-family: var(--font-inter);
    font-size: 12px;
    line-height: 15px;
    color: #828282;
    font-weight: 500;
    transition: border-color 0.2s ease-out, background-color 0.2s ease-out,
      color 0.2s ease-out;

    &:hover {
      border-color: var(--color-blue);
      background-color: var(--color-blue);
      color: var(--color-white);
    }
  }

  &.m-search {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    line-height: 0;
    padding: 10px;
    transition: opacity 0.2s ease-out;
    & svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
