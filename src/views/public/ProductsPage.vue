<template>
  <div>
    <h1>This are your Published Products</h1>
    <PublishProductsView @add-to-cart="addToCart($event)" :products="products.products" />
  </div>
</template>

<script>
import PublishProductsView from "@/components/PublishProductsView.vue";
import {mapState} from "vuex";
export default {
  components: {PublishProductsView},
  computed: {
    ...mapState(['products']),
  },
  methods: {
    addToCart(index) {
      this.$store.dispatch("cart/ADD_TO_CART", index);
      // this.$store.commit("products/ADD_TO_CART", index, { root: true });
    },
  },
};
</script>

<style scoped></style>
