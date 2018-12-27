<template lang="pug">
div#keyboard
  div(class="button -dark center" v-if="status.start == 1" v-on:click="gameHandler") Start
  div(class="button -dark center" v-if="status.stop == 1" v-on:click="stop") Stop
  div(class="button -dark center" v-if="status.send == 1" v-on:click="send") Send
  div(class="button -dark center" v-if="status.restart == 1" v-on:click="restart")#on-button Restart
  Arrow
  Countdown(ref="countdown")
  Panel(ref="panel")
</template>

<script>
import Countdown from './Countdown.vue'
import Panel from './Panel.vue'
import Arrow from './Arrow.vue'

export default {
  name: 'keyboard',
  data() {
    return {
      status: {
        start: 1,
        stop: 0,
        send: 0,
        restart: 0
      },
      message: "Click start to do this exp",
      exp: {}
    };
  },
  methods: {
    start: function () {
      this.status.start = 0;
      this.status.send = 0;
      this.status.stop = 1;
      this.$refs.countdown.start();
    },
    stop: function () {
      this.status.stop = 0;
      this.status.send = 1;
      this.status.restart = 1;
      this.$refs.countdown.stop();
    },
    send: function () {
      this.status.stop = 0;
      this.status.send = 0;
      this.status.restart = 1;
    },
    restart: function () {
      this.status.start = 1;
      this.status.restart = 0;
      this.status.send = 0;
      this.$refs.countdown.restart();
    },
    gameHandler: function () {
      this.$refs.panel.gameHandler();
      this.start();
    }
  },
  components: {
    Countdown,
    Panel,
    Arrow
  }
};
</script>
<style lang="sass">
@import '../../node_modules/normalize-scss/sass/normalize'
@include normalize()

.button
  display: flex
  overflow: hidden
  margin: 10px
  padding: 12px 12px
  cursor: pointer
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  transition: all 150ms linear
  text-align: center
  white-space: nowrap
  text-decoration: none !important
  text-transform: none
  text-transform: capitalize
  color: #fff
  border: 0 none
  border-radius: 4px
  font-size: var(--button-font-size)
  font-weight: 500
  line-height: 1.3
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  justify-content: center
  align-items: center
  flex: 0 0 160px
  box-shadow: 2px 5px 10px #e4e4e4
  &:hover
    transition: all 150ms linear
    opacity: .85
  &:active
    transition: all 150ms linear
    opacity: .75
  &:focus
    outline: 1px dotted #959595
    outline-offset: -4px
  &.-dark
    color: var(--color-smoke)
    background: var(--color-dark)
    &:focus
      outline: 1px dotted var(--color-smoke)
      outline-offset: -4px
</style>
