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
      <p>Add the quantity of the product:</p>
      <input id="quantity" placeholder="add quantity" v-model="quantity" />
      <button type="submit" @click="addQuantity(quantity)">Add Quantity</button>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  data() {
    return {
      quantity: 0,
      temp: {},
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
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
  methods: {
    addQuantity(quantity) {
      this.temp.index = this.index;
      this.temp.quantity = quantity;
      this.$store.commit("products/ADD_QUANTITY", this.temp, { root: true });
      this.quantity = 0;
    },
  },

}
</script>

<style scoped>

</style>