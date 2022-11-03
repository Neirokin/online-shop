<script setup lang="ts"></script>

<template>
  <div class="layout-header">
    <div class="logo">
      <h1 class="logo__text">_ONLINE / SHOP_</h1>
    </div>
    <div class="body"></div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.layout-header {
  display: flex;
  background-color: $color-primary;

  .logo {
    display: flex;
    align-items: center;
    padding: 24px;

    &__text {
      color: $color-secondary;
      font-family: $font-josefin;
    }
  }
}
</style>
