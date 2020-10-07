<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/" class="header__title">Takeshi Hatae</nuxt-link>
      <div class="header__menu" v-if="$route.path != '/'">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/information">Information</nuxt-link>
        <nuxt-link to="/profile">Profile</nuxt-link>
        <nuxt-link to="/gear">Gear</nuxt-link>
        <nuxt-link to="/work">Work</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
</script>

<style lang="postcss">
  .header {
    color: rgb(255,255,255);
    background-color: rgb(0, 0, 0);
    box-shadow: 0 30px;

    &__container {
      height: 75px;
      @media (max-width: 559px) {
        height: 50px;
      }
      display: flex;
      align-items: center;
      padding: 0 5%;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    &__menu {
      font-size: 20px;
      font-weight: 600;
      @media (min-width: 960px) {
        margin: 0 0 0 auto; 
      }
      @media (max-width: 959px) {
        display: none;
      }
      a {
        padding: 0 5px;
      }
    }
  }
</style>