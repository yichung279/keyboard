<template lang="pug">
router-view
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      message: 'Hello, Keyboard!'
    };
  }
};
</script>

<style lang="sass">


\:root
  --color-dark: #161616
  --color-ocean: #416dea
  --color-grass: #3dd28d
  --color-snow: #FFFFFF
  --color-salmon: #F32C52
  --color-sun: #feee7d
  --color-alge: #7999a9
  --color-flower: #353866
  --color-smoke: #e4e4e4
  --button-font-size: 20px
  --clock-font-size: 55px

html
  overflow: hidden

body
  background-color: #e4e4e4
  font-family: 'Roboto', sans-serif
  height: 100%
  overflow: hidden
</style>
