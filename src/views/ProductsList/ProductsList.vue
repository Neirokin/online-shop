<script setup lang="ts">
import { ProductsCard } from '@/components'
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/productsStore'

const productsStore = useProductsStore()

onMounted(() => {
  productsStore.getProducts()
})
</script>

<template>
  <div class="products">
    <div class="products-list">
      <ProductsCard
        v-for="product in productsStore.products"
        :key="product.id"
        :title="product.title"
        :description="product.description"
        :image="product.image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.products {
  .products-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 12px;
  }
}
</style>
