<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/" class="header__title">Takeshi Hatae</nuxt-link>
      <div class="header__menu--lg" v-if="$route.path != '/'">
        <MenuLink />
      </div>
      <div class="header__menu--md">
        <button @click="closeModalMenu()" v-if="$store.state.modalMenuShow">
          <img class="header__icon--close" src="@/assets/header__icon--close.svg"  >
        </button>
        <button @click="openModalMenu()" v-else>
          <img class="header__icon--open" src="@/assets/header__icon--open.svg"  >
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    openModalMenu() {
      this.$store.commit('openModalMenu')
    },
    closeModalMenu() {
      this.$store.commit('closeModalMenu')
    }
  }
}
</script>

<style lang="postcss">
  .header {
    color: rgb(255,255,255);
    background-color: rgb(0, 0, 0);
    box-shadow: 0 30px;
    width: 100%;
    z-index: 6;

    &__container {
      min-height: 65px;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 5%;
    }

    &__title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    &__menu {
      font-size: 1.5rem;
      font-weight: 600;
      &--lg {
        @media (min-width: 960px) {
          margin: 0 0 0 auto; 
        }
        @media (max-width: 959px) {
          display: none;
        }
        .menu__link {
          padding: 0 5px;
        }
      }
      &--md {
        background-color: black;
        @media (min-width: 960px) {
          display: none; 
        }
        @media (max-width: 959px) {
          margin: 0 0 0 auto;
        }
        .menu__link {
          padding: 0 5px;
        }
      }
    }

    &__icon {
      &--open {
        width: 2rem;
      }
      &--close {
        width: 2rem;
      }
    }
  }
</style>