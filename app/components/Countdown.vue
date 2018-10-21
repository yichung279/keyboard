<template lang="pug">
div
  div.container {{ clock }}
</template>

<script>

const SECOND = 1;
const MINUTE = 60 * SECOND;

export default {
  name: 'countdown',
  data() {
    return {
      sessionLength: 1,
      sessionTime: 60,
      timerStart: false,
      time: null,
    }
  },
  computed: {
    clock() {
      if (this.sessionTime > 0) {
        let min = ('0' + parseInt(this.sessionTime/60, 10)).slice(-2)
        let sec = ('0' + this.sessionTime%60).slice(-2)
        return `${min}:${sec}`
      }
      else {
        return `00:00`
      }
    },
  },
  methods: {
    timer() {
      let my = this
      this.time = setInterval(() => {
        if (my.sessionTime > 0) {
          my.sessionTime--
        }
      }, 1000)
    },
    start() {
      if (!this.timerStart) {
        this.timer()
      }
      this.timerStart = !this.timerStart
    },
    stop() {
      if (this.timerStart) {
        clearInterval(this.time)
      }
      this.timerStart = !this.timerStart
    },
    restart() {
      this.sessionLength = 1
      this.sessionTime = 60
      this.timerStart = false
      this.time = null
    },
  },
}
</script>

<style>
.container {
  display: flex;
  overflow: hidden;
  margin: 10px;
  padding: 12px 12px;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  transition: all 150ms linear;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;
  color: #000;
  border: 0 none;
  border-radius: 4px;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  justify-content: center;
  align-items: center;
  flex: 0 0 160px;
  box-shadow: 2px 5px 10px var(--color-smoke);
}
</style>
