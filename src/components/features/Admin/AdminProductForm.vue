<template>
  <form @submit="trySubmit" class="d-flex flex-column">
    <h4>Ajouter un produit</h4>
    <hr class="w-100" />
    <div class="form-group">
      <label for="">Image</label>
      <input v-model="form.img" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="">Titre</label>
      <input v-model="form.title" type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label for="">Description</label>
      <textarea
        v-model="form.description"
        name=""
        id=""
        cols="30"
        rows="3"
        class="form-control"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="">Prix</label>
      <input v-model.number="form.price" type="number" class="form-control" />
    </div>
    <ul v-if="errors.length">
      <li class="text-danger" v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul>
    <!-- <pre>
        {{$data}}
    </pre> -->
    <button class="btn btn-primary">Ajouter</button>
  </form>
</template>

<script>
import { eventBus } from "../../../main";
export default {
  data() {
    return {
      form: {
        img: "",
        title: "",
        description: "",
        price: "",
      },
      errors: [],
    };
  },
  methods: {
    trySubmit(e) {
      e.preventDefault();
      if (this.formIsValid()) {
        eventBus.addProduct({ ...this.form });
        this.reserForm();
        alert('Produit ajoute !')
      }
    },
    formIsValid() {
      this.errors = [];
      if (!this.form.img) {
        this.errors.push("Le lien vers l' image est requis");
      }
      if (!this.form.title) {
        this.errors.push("Le titre de l' article est requis");
      }
      if (!this.form.description) {
        this.errors.push("La de l' article est requise");
      }
      if (!this.form.price) {
        this.errors.push("Le prix de l' article est requis");
      }
      return this.errors.length ? false : true;
    },
    reserForm() {
      this.form = {
        img: "",
        title: "",
        description: "",
        price: "",
      };
    },
  },
};
</script>

<style></style>
