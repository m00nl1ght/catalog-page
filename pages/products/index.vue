<template>
  <div>
    <div class="fl">
      <div class="fl">
        <label class="filter">Фильтр</label>
        <input class="filter_input" v-model="filter" type="text" placeholder="Введите текст.." />
      </div>
      <div>
        <button class="btn_switch" @click="switchListGrid">Изменить вид: список или сетка</button>
      </div>
    </div>
      <div :class="{'container_grid': isGrid, 'container_flex' : isFlex}">
      <div v-for="product in filterProducts" :key="product.id">
        <ProductCard :product="product" v-model="isFlex"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const { data: products } = await useFetch("https://fakestoreapi.com/products");
const filter = ref("");
const isGrid = ref(true)
const isFlex = ref(false)

function switchListGrid() {
  if(isGrid.value === true){
    isGrid.value = false
    isFlex.value = true
  }
  else if(isFlex.value = true) {
    isGrid.value = true
    isFlex.value = false
  }
}

const filterProducts = computed(() => {
  let val = filter.value;
  return products.value.filter((product) => {
    return (
      val === "" ||
      product.title.toLowerCase().indexOf(val.toLowerCase()) !== -1 ||
      product.category.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
  });
});

</script>

<style lang="scss" scoped></style>
