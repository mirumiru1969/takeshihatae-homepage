<template>
  <transition name="modal__menu">
    <div class="modal__menu" v-if="$store.state.modalMenuShow">
      <MenuLink />
    </div>
  </transition>
</template>

<script>
</script>

<style lang="postcss">

.modal__menu {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  padding: 0 5%;
  top: 65px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  color: white;
  .menu__link {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 48px;
    text-shadow: 1px 2px 3px #808080;
  }
  @media (min-width: 960px) {
    display: none; 
  }
}
</style>
