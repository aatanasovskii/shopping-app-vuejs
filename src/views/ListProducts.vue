<template>
  <div class="categories">
    <label>Search Products:</label>
    <input id="searchProducts" v-model="searchProducts" type="search" />
    <h2>Your Products:</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody v-for="(product, index) in productsFinal" :key="product.title">
        <tr>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        <span>
          <button :disabled="product.published" @click="publishProduct(index)">Publish</button>
          <button @click="deleteProduct(index)">Delete</button>
        </span>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      converted: [],
      searchProducts: ""
    };
  },
  computed: {
    ...mapState(['products']),
    // products() {
    //   return this.$store.state.products;
    // },
    productsFinal() {
      return (this.searchProducts.length === 0
          ? this.products.products
          : this.products.products.filter(
              (product) => product.title === this.searchProducts
          )).map(product =>({
        ...product,
        category: product.category.map(cat => cat.title).join(',')
      }))
    },
  },
  methods: {
    deleteProduct(index) {
      this.$store.commit("products/DELETE_PRODUCT", index, { root: true });
    },
    publishProduct(index) {
      this.$store.commit("products/PUBLISH_PRODUCT", index, { root: true });
    },
  },
}
</script>

<style scoped>
table, th, td {
  border:1px solid black;
  border-collapse: collapse;
  width: 75% ;
  table-layout: fixed;
  margin-left:auto;
  margin-right:auto;
  padding: 15px;
}
th {
  font-weight: bold;
  font-size: large;
}
</style>
