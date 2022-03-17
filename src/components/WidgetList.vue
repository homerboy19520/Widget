<template>
  <div class="widget-list">
    <WidgetItem
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :isChecked="item.isChecked"
      :title="item.title"
    ></WidgetItem>
  </div>
</template>

<script>
import WidgetItem from "@/components/WidgetItem";
import { mapGetters } from "vuex";
export default {
  name: "WidgetList",
  components: { WidgetItem },
  computed: {
    ...mapGetters(["list"]),
  },
};
</script>

<style scoped lang="scss">
.widget-list {
  max-height: 400px;
  overflow: auto;
  margin-bottom: 10px;
}
</style>
