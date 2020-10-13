<template>
  <div class="default">
    <Header />
    <Nuxt />
    <Footer />
    <ModalMenu />
  </div>
</template>


<style lang="postcss">

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: responsive;
  word-spacing: 1px;
  background-color: rgb(0, 0, 0); 
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.default {
  position: relative
}

a {
  color : inherit;
  text-decoration : none;
}

button{
  padding: 10px 10px;
  background-color: transparent;
  border-style: none;
  border-radius: 5px;
  transition: color .3s;
  transition: background-color .3s;
  &:active {
    color: white;
    background-color: gray;
  }
  &:hover {
    color: white;
    background-color: gray;
  }
  &.active {
    color: white !important;
    background-color: black !important;
  }
}
</style>
