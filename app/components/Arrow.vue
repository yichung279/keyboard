<template>
<div>
<a href="#" class="button-arrow button-effect">TL</a>
<a href="#" class="button-arrow button-effect">BL</a>
<a href="#" class="button-arrow button-effect">M</a>
<a href="#" class="button-arrow button-effect">TR</a>
<a href="#" class="button-arrow button-effect">BR</a>
</div>
</template>
<script>
</script>
<style lang="sass">
a
  text-decoration: none
  
.button-arrow
  position: relative
  padding: 15px 25px
  
  color: black
  text-transform: uppercase
  background-color: transparent
  border: 1px solid black
  &:hover
    cursor: pointer
  
.button-effect
  display: inline-block
  overflow: hidden
  
.effect-wave
  display: block
  position: absolute
  transform: translateX(-50%) translateY(-50%)
  width: 0px
  height: 0px

  background-color: black
  border-radius: 50%
  opacity: 0.5
</style>
