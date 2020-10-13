<template>
  <transition name="index__menu" v-if="$store.state.indexMenuShow">
    <div class="index__menu">
      <MenuLink />
    </div>
  </transition>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$store.commit('showIndexMenu');
    })
  }
}
</script>

<style lang="postcss">
  .index__menu {
    position: absolute;
    top: 45%;
    left: 5%;
    @media (max-width: 959px) {
      display: none;
    }
    .menu__link {
      display: flex;
      flex-direction: column;
      font-size: 32px;
      font-weight: 500;
      line-height: 48px;
      text-shadow: 1px 2px 3px #808080;
    }
  }
</style>