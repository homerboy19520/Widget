<template>
  <div class="widget-modal">
    <InputModal
      :inputValue="value"
      @onInput="onInput"
      @onbutton="switchCheckboxes"
      @onenter="onEnter"
    ></InputModal>
    <WidgetList></WidgetList>
    <ButtonApp modifier="primary">Apply</ButtonApp>
  </div>
</template>

<script>
import InputModal from "@/components/modals/InputModal";
import WidgetList from "@/components/WidgetList";
import ButtonApp from "@/components/ui/Button";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "WidgetModal",
  components: { ButtonApp, WidgetList, InputModal },
  methods: {
    ...mapActions(["switchChecked", "search"]),
    ...mapMutations(["setValue"]),

    switchCheckboxes() {
      this.switchChecked();
    },

    onEnter() {
      this.search();
    },

    onInput(value) {
      value.trim();
      this.setValue(value);
    },
  },

  computed: {
    ...mapGetters(["value"]),
  },
};
</script>

<style scoped lang="scss">
.widget-modal {
  padding: 10px;
}
</style>
