<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">
      <img
        src="../assets/logo.png"
        alt="logo"
        width="30"
        height="30"
      >
      .LN
    </a>
    <button class="navbar-toggler">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse">
      <div class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click="changePage('UserWrapper')">Boutique</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="changePage('AdminWrapper')">Admin</a>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import { eventBus } from '../main';
export default {
  data(){
    return{
      page: eventBus.page
    }
  },
  methods: {
    changePage(page){
      eventBus.changePage(page)
      this.page = page
    }
  } 
};
</script>

<style>
a{
  cursor: pointer;
}
</style>
