<template>
  <div class="index">
    <div class="index__container">
      <IndexMenu />
      <img class="index__img--lg" src="~/assets/index--lg.jpg" />
      <img class="index__img--md" src="~/assets/index--md.jpg" />
    </div>
  </div>
</template>

<script>
</script>

<style lang="postcss">
.index {
  min-height: 800px;
  background-color: rgb(0, 0, 0);
  &__container {
    position: relative;
  }

  &__img {
    &--lg {
      width: 100%;
      margin: 0;
      @media (min-width: 960px) {
        display: inline-block;
      }
      @media (max-width: 959px) {
        display: none;
      }
    }
    &--md {
      width: 100%;
      margin:0 ;
      @media (min-width: 960px) {
        display: none;
      }
      @media (max-width: 959px) {
        display: inline-block;
      }
    }
  }  
}
</style>
