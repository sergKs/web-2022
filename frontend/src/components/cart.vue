<template>
  <div>
    Корзина: {{ this.$store.state.cart.count }}
  </div>
</template>

<script>
export default {
  name: "cart"
}
</script>

<style scoped>

</style>