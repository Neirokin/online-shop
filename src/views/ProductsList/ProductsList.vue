<script setup lang="ts">
import { ProductsCard } from '@/components'
</script>

<template>
  <div class="products">
    <div class="products-list">
      <ProductsCard v-for="n in 10" :key="n" />
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
