<template>
  <div id="nav" class="nav">
    <nav>
      <router-link to="/publish">Products Page</router-link> |
      <router-link to="/shopping-cart">Shopping Cart</router-link> |
      <router-link to='/admin'>Admin View</router-link>  |
      <router-link to='/admin/category-create'>Create a Category</router-link> |
      <router-link to='/admin/categories'>List of Categories</router-link> |
      <router-link to='/admin/product-create'>Crete a Product</router-link> |
      <router-link to='/admin/products'>List of Products</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  justify-content: space-between;
  align-items: center;
  height: 60px;
  color: darkblue;
}
.nav {
  padding: 10px;
  background-color: #41b883;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
}

.nav a:hover {
  background-color: white;
  color: #333;
}
</style>
