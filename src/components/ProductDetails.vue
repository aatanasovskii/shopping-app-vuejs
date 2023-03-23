<template>
  <div>
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
    productShow() {
      console.log(this.product);
      return this.product;
    },
  },
  methods: {
    addQuantity(quantity) {
      this.temp.index = this.index;
      this.temp.quantity = quantity;
      this.$emit("add-quantity", this.temp)
      this.quantity = 0;
    },
  },
}
</script>

<style scoped></style>
