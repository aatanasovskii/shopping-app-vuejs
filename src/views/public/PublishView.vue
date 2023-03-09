<template>
  <div>
    <h1>This is the Publish View Page!</h1>
    <h3>Published Products:</h3>
    <ol v-if="publishedProducts.length !== 0" type="I">
      <li v-for="(product, index) in publishedProducts">
        <router-link :to="{ name: 'product-details', params: { product: product } }">
          {{ product.title }}
        </router-link>
        - {{ product.price }}
      </li>
    </ol>
    <div v-else>
      There are no published products.
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  computed: {
    ...mapState(['products']),
    publishedProducts() {
      return (this.products.products.filter(
          (product) => product.published === true));

      // let published = [];
      // let j = 0;
      // for (let i=0; i<this.products.products.length; i++) {
      //   if (this.products.products[i].published === true) {
      //     published.push(this.products.products[i])
      //     j++;
      //   };
      // };
      // return published;
    },
  },
};
</script>

<style scoped>
</style>
