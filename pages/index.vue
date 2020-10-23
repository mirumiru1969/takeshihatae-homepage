<template>
  <div class="index">
    <transition name="index" >
      <div class="index__container" v-if="$store.state.indexShow">
        <img class="index__img--lg" src="~/assets/index--lg.jpg" />
        <img class="index__img--md" src="~/assets/index--md.jpg" />
        <IndexMenu />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('showIndex');
    })
  }
}
</script>

<style lang="postcss">
.index {
  min-height: 100vh;
  background-color: rgb(0, 0, 0);
  &__container {
    position: relative;
  }

  &__img {
    &--lg {
      width: 100%;
      height: calc(100vw * (945/1418));
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
      height: calc(100vw * (559/414));
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
