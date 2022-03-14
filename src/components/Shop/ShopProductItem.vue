<template>
  <div class="w-25 p-3 product-container d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <img :src="product.img" alt="image" style="height: 150px" />
    </div>
    <div>
      <h3>{{ product.title }}</h3>
      <hr />
    </div>
    <div>
      <p>{{ product.description }}</p>
    </div>
    <div>
      <span>{{ product.price }}</span>
      <button class="btn btn-primary btn-sm float-right">Commander</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        img: "https://m.media-amazon.com/images/I/51zylG5gxfS._AC_SX679_.jpg",
        title: "Play station 5",
        description:
          "La PS5 est une console de salon avec support optique (Blu-ray 4K) annoncé pour la fin d'année 2020.",
        price: "400€",
      },
    };
  },
};
</script>

<style>
.product-container {
  height: 400px;
}
p {
  font-size: 12px;
}
</style>
