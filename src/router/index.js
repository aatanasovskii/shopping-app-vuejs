import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateCategory from '../views/CreateCategory.vue'
import ListCategories from '../views/ListCategories.vue'
import AdminView from "@/views/AdminView.vue";
import CreateProduct from '../views/CreateProduct.vue'
import ListProducts from '../views/ListProducts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin-view',
    component: AdminView,
  },
  {
    path: '/admin/category-create',
    name: 'category-create',
    component: CreateCategory
  },
  {
    path: '/admin/categories',
    name: 'categories',
    component: ListCategories
  },
  {
    path: '/admin/product-create',
    name: 'product-create',
    component: CreateProduct
  },
  {
    path: '/admin/products',
    name: 'products',
    component: ListProducts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
