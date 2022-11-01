<script setup lang="ts"></script>

<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header__image">image</div>
    </div>
    <div class="card-body">
      <p class="card-body__title">Title</p>
      <p class="card-body__description">Description</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid black;

  .card-header {
    border-bottom: 1px solid black;
  }
}
</style>
