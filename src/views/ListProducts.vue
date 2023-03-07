<template>
  <div class="categories">
    <h2>Your Products: </h2>
    <table>
      <th>Title</th>
      <th>Description</th>
      <th>Price</th>
      <tr v-for="(product, index) in products.products" :key="index">
        <td>{{ product.title }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {},
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
}
th {
  font-weight: bold;
  font-size: large;
}
</style>
