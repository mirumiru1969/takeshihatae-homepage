<template>
  <div class="index__menu">
    <MenuLink />
  </div>
</template>

<script>
</script>

<style lang="postcss">
  .index__menu {
    @media (min-width: 960px) {
      position: absolute;
      top: 45%;
      left: 5%;
      .menu__link {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.8rem;
        text-shadow: 1px 2px 3px #808080;
      }
    }
    @media (max-width: 959px) {
      color: white;
      .menu__link {
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 500;
        padding: 1rem 5%;
        background: linear-gradient(178deg, black 65%, gray);
      }
    }
    
  }
</style>