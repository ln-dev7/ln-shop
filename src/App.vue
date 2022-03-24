<template>
  <div id="app">
    <the-header></the-header>
    <user-wrapper></user-wrapper>
    <admin-wrapper></admin-wrapper>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import UserWrapper from './components/features/User/UserWrapper.vue'
import AdminWrapper from './components/features/Admin/AdminWrapper.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    UserWrapper,
    AdminWrapper
  },
}
</script>

<style>

</style>
