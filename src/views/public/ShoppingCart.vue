<template>
  <div>
    <h1>Welcome to your Shopping Cart</h1>
    <ol v-for="product in products.products" type="I">
      <li v-if="product.quantity > 0">
        {{ product.title }} - quantity: {{ product.quantity }}
        <br> price: {{ product.price }}
      </li>
    </ol>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState(['products']),
    // cartProducts() {
    //   console.log(this.products.products.filter(
    //       (product) => product.quantity > 0));
    //   return (this.products.products.filter(
    //       (product) => product.quantity > 0));
    // },
  },
}
</script>

<style scoped>

</style>