<template>
  <div class="categories">
    <h2>Your Categories: </h2>
    <table>
      <th>Title</th>
      <th>Description</th>
      <tr v-for="(category, index) in categories.categories" :key="index">
        <td>{{ category.title }}</td>
        <td>{{ category.description }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories;
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
