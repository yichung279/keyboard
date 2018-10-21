<template lang="pug">
div
  div#panel
    .row
      each key in ['q','w','e','r','t','y','u','i','o','p']
        .key(id=key)
    .row
      each key in ['a','s','d','f','g','h','j','k','l']
        .key(id=key)
    .row
      each key in ['z','x','c','v','b','n','m']
        .key(id=key)
    .row: .key#space
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


#panel
  bottom: 0
  height: $keyboard-height
  left: 0
  position: absolute
  width: $keyboard-width

  .row
    margin-top: $vertical-gap
    text-align: center

    .key
      background: url('../../res/button.png')
      display: inline-block
      font-size: 9vw
      font-weight: bolder
      height: $key-height
      line-height: $key-height
      vertical-align: top
      width: $key-width

      &.red
        color: $red

      &.blue
        color: $blue

    .key+.key
      margin-left: $horizontal-gap

  #space
    margin-left: $key-width + $horizontal-gap
    width: 4 * $key-width + 3 * $horizontal-gap

#timer
  color: $brown
  font-size: 7vw
  text-align: center
</style>

