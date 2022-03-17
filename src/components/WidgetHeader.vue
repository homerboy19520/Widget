<template>
  <div class="widget-header" :class="{ 'm-active': isOpen }" @click="onHeader">
    <ParagraphApp size="12" color="black" weight="medium"
      >Category</ParagraphApp
    >
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      xml:space="preserve"
    >
      <g>
        <path
          d="M3.3,26.1L3.3,26.1c1-1,2.6-1,3.5,0L51,70.3l44.2-44.2c1-1,2.6-1,3.5,0v0c1,1,1,2.6,0,3.5L52.4,76c-0.8,0.8-2,0.8-2.8,0
		L3.3,29.7C2.3,28.7,2.3,27.1,3.3,26.1z"
        />
      </g>
    </svg>
  </div>
</template>

<script>
import ParagraphApp from "@/components/ui/Paragraph";
import { mapGetters } from "vuex";
export default {
  name: "WidgetHeader",
  components: { ParagraphApp },
  methods: {
    onHeader() {
      this.$emit("onheader");
    },
  },
  computed: {
    ...mapGetters(["isOpen"]),
  },
};
</script>

<style scoped lang="scss">
.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--color-strong-grey);
  cursor: pointer;
  transition: border-color 0.2s ease-out;

  &:hover {
    border-color: var(--color-black);
  }

  & svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s ease-out;
  }

  &.m-active {
    svg {
      transform: rotate(180deg);
    }
  }
}
</style>
