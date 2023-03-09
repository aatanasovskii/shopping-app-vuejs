<template>
  <div>
    <h1>Details of your product:</h1>
    <div>
      <h3>
        Title- {{ productShow.title }}
      </h3>
      <h4>
        Description- {{ productShow.description }}
      </h4>
      <h4>
        Price- {{ productShow.price }}
      </h4>
      <ol>
        Categories-
        <ul v-for="category in productShow.category">
          <router-link :to="{ name: 'category-products', params: { category: category } }">
            {{ category.title }}
          </router-link>
        </ul>
      </ol>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(['products']),
    productShow() {
      console.log(this.product);
      return this.product;
    },
  },

}
</script>

<style lang="scss" scoped>

</style>