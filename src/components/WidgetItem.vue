<template>
  <div class="widget-item">
    <label class="widget-item__label" :id="id">
      <input
        :checked="isChecked"
        class="widget-item__checkbox"
        :for="id"
        type="checkbox"
      />
      <ParagraphApp>{{ title }}</ParagraphApp>
    </label>
  </div>
</template>

<script>
import ParagraphApp from "@/components/ui/Paragraph";
export default {
  name: "WidgetItem",

  props: {
    title: {
      type: String,
      default: "",
    },

    isChecked: {
      type: Boolean,
      default: false,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },
  },
  components: { ParagraphApp },
};
</script>

<style scoped lang="scss">
.widget-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: #eceff0;
    }
  }

  &__checkbox {
    margin: 0 20px 0 0;
  }
}
</style>
