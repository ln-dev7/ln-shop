import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: 1,
        img: "https://m.media-amazon.com/images/I/51zylG5gxfS._AC_SX679_.jpg",
        title: "Play station 5",
        description: "La PS5 est une console de salon.",
        price: "400€",
      },
      {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv2jGMqU2gpsIv3RUhYIqHQ2QKqV19pz36cXeFAlyyJep8jEC6qpM5WqTnCY10ziVpJE&usqp=CAU",
        title: "MacBook Air",
        description: "Un bijou du monde des PC",
        price: "1000€",
      },
      {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJxw2u5y8pkCDg7Mp0g6hli1TLUfLcMUKeg&usqp=CAU",
        title: "MacBook Pro",
        description: "Un bijou du monde des PC",
        price: "1200€",
      },
    ],
    cart: [
      
    ],
  },
    methods: {
      addProductToCart(product){
        this.cart = [...this.cart, product]
        this.$emit("update:cart", this.cart.slice())
      }
    },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
