<template>
  <div id="app">
    <widget-page></widget-page>
  </div>
</template>

<script>
import WidgetPage from "@/views/widget-page";
export default {
  name: "App",
  components: {
    WidgetPage,
  },
};
</script>

<style lang="scss">
@import "assets/styles/styles.css";
</style>
