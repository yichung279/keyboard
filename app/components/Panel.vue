<template lang="pug">
div
  div#panel
    .button-container
      .key(v-for="key in keys.row1" :id="key" v-on:click="hit") {{ key }}
    .button-container
      .key(v-for="key in keys.row2" :id="key" v-on:click="hit") {{ key }}
    .button-container
      .key(v-for="key in keys.row3" :id="key" v-on:click="hit") {{ key }}
    .button-container
      .key(v-on:click="hit")#space
</template>
<script>
var keys= [
  'q','w','e','r','t','y','u','i','o','p',
  'a','s','d','f','g','h','j','k','l',
  'z','x','c','v','b','n','m'
];
export default {
  name: 'panel',
  data() {
    return {
      regenerate: 1,
      keys_6: [],
      keys: {
        row1: ['q','w','e','r','t','y','u','i','o','p'],
        row2: ['a','s','d','f','g','h','j','k','l'],
        row3: ['z','x','c','v','b','n','m']
      }
    };
  },
  methods: {
    hit(event) {
      console.log(event.pageX);
      console.log(event.pageY);
      if (this.regenerate === 1) {       
        console.log("regenerate");
      }
    },
    gameHandler() {
      if (this.regenerate === 1) {       
        console.log("dsdsd");
        this.generate();
      }
    },
    generate() {
      this.keys_6 = this.shuffle(keys);
      console.log(this.keys_6.slice(0, 6))
    },
    shuffle(array) {
      var result = [], source = array.concat([]);
      while (source.length) {
        let index = Math.floor(Math.random() * source.length);
        result.push(source[index]);
        source.splice(index, 1);
      }
      return result;
    }
  }
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
  bottom: 0%
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
    margin-left: $horizontal-gap/2
    margin-right: $horizontal-gap/2
    background-color: $key-color
    font-size: 9vw
  #space
    margin-left: $key-width + $horizontal-gap
    width: 4 * $key-width + 3 * $horizontal-gap
</style>