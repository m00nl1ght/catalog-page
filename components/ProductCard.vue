<template>
  <div :class="{ card_grid: switchGridFlex, card_flex: model }">
    <img :src="product.image" alt="" />
    <p>{{ product.title }}</p>
    <p>Категория: {{ product.category }}</p>
    <NuxtLink class="link" :to="`/products/${product.id}`">
      <p class="btn">Детали</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
const model = defineModel();
const switchGridFlex = computed(() => {
  return model.value !== true ? true : false;
});
</script>

<style lang="scss"></style>
