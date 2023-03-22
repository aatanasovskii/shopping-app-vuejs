<template>
  <div>
    <h3>Published Products:</h3>
    <div>
      <ol v-for="(product, index) in products.products" type="I">
        <li v-if="product.published === true">
          <router-link :to="{ name: 'product-details', params: { product: product, index: index } }">
            {{ product.title }}
          </router-link>
          - {{ product.price }}
          <button @click="addToCart(index)">Add to cart</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState(['products']),
  },
  methods: {
    addToCart(index) {
      this.$emit("add-to-cart", index)
    }
  },
};
</script>

<style scoped>

</style>
