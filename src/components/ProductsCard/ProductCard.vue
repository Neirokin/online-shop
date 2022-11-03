<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header__image" />
    </div>
    <div class="card-body">
      <h3 class="card-body__title">Title</h3>
      <p class="card-body__description">Description</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.card {
  border: 1px solid black;
  background-color: $color-gray-100;

  .card-header {
    border-bottom: 1px solid black;
    height: 150px;

    &__image {
      background-image: url('https://via.placeholder.com/150');
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
      font-size: 24px;
    }
    &__description {
      font-size: 14px;
      margin-top: 12px;
    }
  }
}
</style>
