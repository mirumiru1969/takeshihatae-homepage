<template>
  <div class="index">
    <div class="index__container">
      <div class="index__menu">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/information">Information</nuxt-link>
        <nuxt-link to="/profile">Profile</nuxt-link>
        <nuxt-link to="/gear">Gear</nuxt-link>
        <nuxt-link to="/work">Work</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
      <img class="index__img--lg" src="~/assets/index--lg.jpg" />
      <img class="index__img--md" src="~/assets/index--md.jpg" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.index {
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

  &__menu {
    position: absolute;
    top: 50%;
    left: 5%;
    display: flex;
    flex-direction: column;
    @media (max-width: 959px) {
      display: none;
    }
    a {
      font-size: 32px;
      font-weight: 500;
      line-height: 48px;
      text-shadow: 1px 2px 3px #808080;
    }
  }
}
</style>
