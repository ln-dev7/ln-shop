<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <component :is="page"></component>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserWrapper from "./components/features/User/UserWrapper.vue";
import AdminWrapper from "./components/features/Admin/AdminWrapper.vue";
import { eventBus } from "./main";

export default {
  name: "App",
  components: {
    TheHeader,
    UserWrapper,
    AdminWrapper,
  },
  data() {
    return {
      page: eventBus.page,
    };
  },
  created() {
    eventBus.$on("update:page", (page) => {
      this.page = page;
    });
  },
};
</script>

<style></style>
