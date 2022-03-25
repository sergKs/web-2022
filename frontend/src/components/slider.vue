<template>
  <section>
    <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        img-width="1200"
        img-height="300"
    >
      <b-carousel-slide img-src="https://magizoo.ru/upload/iblock/bfb/Hills_banner_SPRL_4_1_Cat_1800x616px.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="https://magizoo.ru/upload/iblock/bfb/Hills_banner_SPRL_4_1_Cat_1800x616px.jpg"></b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: "slider"
}
</script>

<style scoped>

</style>