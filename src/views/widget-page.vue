<template>
  <div class="widget-page">
    <WidgetApp></WidgetApp>
  </div>
</template>

<script>
import WidgetApp from "@/components/WidgetApp";
export default {
  name: "widget-page",
  components: { WidgetApp },
};
</script>

<style lang="scss" scoped>
.widget-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #eceff0;
}
</style>
