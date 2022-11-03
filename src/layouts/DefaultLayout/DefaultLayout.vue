<script setup lang="ts">
import DefaultLayoutHeader from './components/DefaultLayoutHeader.vue'
</script>

<template>
  <div class="layout">
    <DefaultLayoutHeader />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/style/variables.scss';

.layout {
  .content {
    padding: 40px;
    background-color: $color-secondary;
  }
}
</style>
