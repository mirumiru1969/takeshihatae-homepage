<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
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

a {
  color : inherit;
  text-decoration : none;
}
</style>
