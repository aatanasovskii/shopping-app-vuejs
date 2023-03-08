<template>
  <div class="categories">
    <h2>Your Products:</h2>
    <table>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Category</th>
      </tr>
      <tr v-for="(product, index) in products.products" :key="index">
        <td>{{ product.title }}</td>
        <td>{{ product.price }}</td>
        <td v-for="category in product.category" colspan="product.category.length">
          {{ category.title }}
        </td>
        <span>
          <button>Publish</button>
          <button @click="deleteProduct(index)">Delete</button>
        </span>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      converted: [],
    };
  },
  computed: {
    ...mapState(['products']),
    // products() {
    //   return this.$store.state.products;
    // },
  },
  methods: {
    deleteProduct(index) {
      this.$store.commit("products/DELETE_PRODUCT", index, { root: true });
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
