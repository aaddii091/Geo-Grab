<template>
  <div class="effect">
    <NavBar />
    <MapComp />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MapComp from "@/components/MapComp.vue";
export default {
  components: { NavBar, MapComp },
};
</script>

<style scoped>
.position {
  position: fixed;
}
</style>
