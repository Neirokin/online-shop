<script setup lang="ts">
interface ProductCardProps {
  title: string
  description: string
  price: number
  image: string
}
defineProps<ProductCardProps>()
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div
        class="card-header__image"
        :style="{ backgroundImage: `url(${image})` }"
      />
    </div>
    <div class="card-body">
      <h3 class="card-body__title">{{ title }}</h3>
      <p class="card-body__description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.card {
  border: 1px solid $color-gray-200;
  background-color: $color-white;
  box-shadow: $shadow-sm;

  .card-header {
    border-bottom: 1px solid $color-gray-200;
    height: 250px;

    &__image {
      background-position: center;
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .card-body {
    padding: 8px;

    &__title {
      font-size: $font-size-large;
      font-family: $font-josefin;
    }
    &__description {
      font-size: $font-size-medium;
      margin-top: 12px;
      font-family: $font-josefin;
      font-weight: $font-weight-light;
    }
  }
}
</style>
