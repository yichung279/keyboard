<template lang="pug">
div
  div#panel
    .button-container
      each key in ['q','w','e','r','t','y','u','i','o','p']
        .key(id=key)
    .button-container
      each key in ['a','s','d','f','g','h','j','k','l']
        .key(id=key)
    .button-container
      each key in ['z','x','c','v','b','n','m']
        .key(id=key)
    .button-container
      .key#space
</template>

<script>
export default {
    
};
</script>

<style lang="sass">
$keyboard-width: 100vw
$keyboard-height: 3.5 / 5.8 * $keyboard-width
$key-height: .75 / 5.8 * $keyboard-width
$key-width: .48 / 5.8 * $keyboard-width
$horizontal-gap: ($keyboard-width - $key-width * 10) / 11
$vertical-gap: ($keyboard-height - $key-height * 4) / 5

$key-color: #C4CAD0
$red: #800
$blue: #037
$brown: #a52a2a

#panel
  bottom: 5%
  height: $keyboard-height
  position: absolute
  width: $keyboard-width
  background: url('../../static/panel.png')

.button-container
  position: relative
  width: $keyboard-width
  margin-top: $vertical-gap
  box-sizing: border-box
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center
  .key
    color: #fff
    position: relative
    width: $key-width
    height: $key-height
    margin-left: $horizontal-gap
    background-color: $key-color
    font-size: 9vw
  #space
    margin-left: $key-width + $horizontal-gap
    width: 4 * $key-width + 3 * $horizontal-gap
</style>

