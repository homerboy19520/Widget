<template>
  <div class="widget">
    <WidgetHeader @onheader="openModal"></WidgetHeader>
    <WidgetModal v-show="isOpen"></WidgetModal>
  </div>
</template>

<script>
import WidgetHeader from "@/components/WidgetHeader";
import WidgetModal from "@/components/modals/WidgetModal";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "WidgetApp",
  components: { WidgetModal, WidgetHeader },
  methods: {
    ...mapMutations(["toggleIsOpen"]),
    ...mapActions(["request"]),
    openModal() {
      this.toggleIsOpen();
    },
  },

  computed: {
    ...mapGetters(["isOpen"]),
  },

  async mounted() {
    await this.request();
  },
};
</script>

<style scoped lang="scss">
.widget {
  max-width: 300px;
  width: 100%;
  background-color: var(--color-white);
  margin-top: 20%;
  border-radius: 5px;
}
</style>
