<template>
  <div class="categories">
    <ListCategoriesTable :categories="categories.categories" />
  </div>
</template>

<script>
import ListCategoriesTable from "@/components/ListCategoriesTable.vue";
import {mapState} from "vuex";
export default {
  components: {ListCategoriesTable},
  computed: {
    ...mapState(['categories']),
  },
}
</script>

<style scoped>
</style>
