<template>
  <div>
    <ol v-for="product in products.products" type="I">
      <li v-if="product.quantity > 0">
        {{ product.title }} - quantity: {{ product.quantity }}
        <br> price: {{ product.price }}
      </li>
    </ol>
    <h3>Your Total Price is: {{ totalPrice }}$</h3>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      total: 0,
    };
  },
  computed: {
    ...mapState(['products']),
    totalPrice() {
      this.total = 0;
      // for (let i=0; i<this.products.products.length; i++){
      //   if(this.products.products[i].quantity > 0) {
      //     this.total += this.products.products[i].price;
      //   }
      // }

      return this.products.products
          .filter(product => product.quantity > 0)
          .map(product => parseInt(product.price) * parseInt(product.quantity))
          .reduce((acc, currentValue) => acc + currentValue, 0);
    },
  },
}
</script>

<style scoped>

</style>