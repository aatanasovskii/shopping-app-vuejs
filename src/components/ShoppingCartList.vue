<template>
  <div>
    <ol v-for="product in cart" type="I">
      <li>
        {{ product.title }} - quantity: {{ product.quantity }}
        <br> price: {{ product.price }}
      </li>
    </ol>
    <h3>Your Total Price is: {{ totalPrice }}$</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
    };
  },
  props: {
    cart: Array,
  },
  computed: {
    totalPrice() {
      this.total = 0;
      // for (let i=0; i<this.products.products.length; i++){
      //   if(this.products.products[i].quantity > 0) {
      //     this.total += this.products.products[i].price;
      //   }
      // }

      return this.cart
          .map(product => parseInt(product.price) * parseInt(product.quantity))
          .reduce((acc, currentValue) => acc + currentValue, 0);
    },
  },
}
</script>

<style scoped></style>
