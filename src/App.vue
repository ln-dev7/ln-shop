<template>
  <div id="app">
    <the-header />
    <div class="d-flex flex-row">
      <shop class="w-75" />
      <cart class="w-25" />
    </div>
  </div>
</template>

<script>
import Cart from './components/Cart/CartWrapper.vue'
import Shop from './components/Shop/ShopWrapper.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    Shop,
    Cart,
  }
}
</script>

<style>

</style>
