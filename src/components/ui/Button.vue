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
      this.$emit("unbutton");
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

  &.m-search {
    background-color: transparent;
    border: none;
    outline: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 3px;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;
    @media (max-width: 700px) {
      left: 10px;
    }
  }

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

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 700px) {
      padding: 10px;
      font-size: 14px;
      line-height: 19px;
    }
  }

  &.m-switch {
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom: 1px dashed var(--color-strong-grey);
    transition: color 0.2s ease-out, border-bottom-color 0.2s ease-out;

    &.active {
      border-bottom-color: var(--color-black);

      & p {
        transition: opacity 0.2s ease-out, color 0.2s ease-out;
        color: var(--color-black);
      }
    }

    &:hover {
      p {
        opacity: 0.8;
      }
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

  &.m-delete {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px;
    transition: opacity 0.2s ease-out;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 700px) {
      width: 100%;
      border: 1px solid var(--color-black);
      border-radius: 10px;
    }
  }

  &.m-pagination {
    border: none;
    outline: none;
    transition: opacity 0.2s ease-out;
    padding: 16px;

    & svg {
      min-height: 25px;
      min-width: 25px;
      @media (max-width: 700px) {
        min-height: 35px;
        min-width: 35px;
      }
    }

    &:hover {
      svg path {
        transition: fill 0.2s ease-out;
        fill: var(--color-black);
      }
    }
    &.disabled {
      cursor: not-allowed;
      &:hover {
        svg path {
          fill: var(--color-blue);
        }
      }
    }
  }
}
</style>
