<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout/DefaultLayout.vue";
import { computed } from "vue";
import type { Component } from "vue";

const layout = computed(() => {
  return DefaultLayout as Component;
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped lang="scss"></style>
