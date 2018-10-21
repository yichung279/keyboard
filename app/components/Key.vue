<template lang="pug">
div
  
</template>

<script>
export default {
    
};
</script>

<style lang="sass">
@import '../../node_modules/normalize-scss/sass/normalize'
@include normalize()

$keyboard-width: 100vw

// see res/size.png
$keyboard-height: 3.5 / 5.8 * $keyboard-width
$key-height: .75 / 5.8 * $keyboard-width
$key-width: .48 / 5.8 * $keyboard-width
$horizontal-gap: ($keyboard-width - $key-width * 10) / 11
$vertical-gap: ($keyboard-height - $key-height * 4) / 5

// color
$red: #800
$blue: #037
$brown: #a52a2a

[data-role='page']
  box-sizing: border-box
  padding: .5em
</style>

