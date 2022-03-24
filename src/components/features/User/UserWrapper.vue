<template>
  <div class="d-flex flex-row">
    <shop-wrapper class="w-75"></shop-wrapper>
    <cart-wrapper class="w-25"></cart-wrapper>
  </div>
</template>

<script>
import CartWrapper from "./Cart/CartWrapper.vue";
import ShopWrapper from "./Shop/ShopWrapper.vue";
export default {
  components: { ShopWrapper, CartWrapper },
};
</script>

<style></style>
