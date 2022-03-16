<template>
  <div class="input-block" :class="[`m-${modifier}`]">
    <slot></slot>
    <input
      :disabled="isDisabled"
      :value="localValue"
      :placeholder="placeholder"
      @input="input($event.target.value)"
      @keydown.enter="onEnter"
    />
  </div>
</template>

<script>
export default {
  name: "InputApp",

  props: {
    placeholder: {
      type: String,
      default: "",
    },
    modifier: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localValue: "",
    };
  },
  methods: {
    input(value) {
      this.localValue = value;
    },
    onEnter() {
      this.$emit("onenter");
    },
  },
  mounted() {
    this.localValue = this.value;
  },
  watch: {
    localValue() {
      this.$emit("oninput", this.localValue);
    },

    value() {
      this.localValue = this.value;
    },
  },
};
</script>

<style lang="scss">
.input-block {
  position: relative;
  width: 100%;

  &.m-main {
    z-index: 0;

    & input {
      width: 100%;
      outline: none;
      padding: 9px 31px;
      border: 1px solid transparent;
      background-color: #eceff0;
      border-radius: 4px;
      font-family: var(--font-inter);
      font-weight: 500;
      color: var(--color-black);
      font-size: 12px;
      line-height: 16px;
      transition: border-color 0.2s ease-out;

      &::placeholder {
        color: var(--color-strong-grey);
        font-size: 12px;
        line-height: 16px;
        transition: opacity 0.2s ease-out;
      }

      &:focus::placeholder {
        opacity: 0;
      }

      &:hover {
        border-color: var(--color-strong-grey);
      }

      &:focus {
        border-color: var(--color-black);
      }

      @media (max-width: 700px) {
        padding: 20px 20px 20px 40px;
        font-size: 16px;
        line-height: 19px;

        &::placeholder {
          font-size: 15px;
          line-height: 18px;
        }
      }
    }
  }
}
</style>
